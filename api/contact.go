package handler

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/Airthee/go-recaptcha"
	mailjet "github.com/mailjet/mailjet-apiv3-go"
)

// Handler is the main function exported to Serverless service
func Handler(w http.ResponseWriter, r *http.Request) {
	// Get all form data
	name, email, subject, message, recaptchaResponse, err := getFormData(r)
	if err != nil {
		fmt.Fprintf(w, err.Error())
		return
	}

	// Init ReCaptcha and verify the response
	// (example: https://github.com/Airthee/go-recaptcha/blob/master/example/example.go)
	recaptcha.Init(os.Getenv("RECAPTCHA_PRIVATE_KEY"))
	host := strings.Split(r.Host, ":")[0]
	result, err := recaptcha.Check(host, recaptchaResponse)
	if err != nil {
		fmt.Fprintf(w, "Recaptcha server error : %v\n", err.Error())
		return
	}

	// The score must be at least 0.85
	// If not, we refuse the request
	if !result.Success || result.Score < 0.85 {
		fmt.Fprintf(w, "Wrong ReCaptcha score")
		return
	}

	// If everything is ok, we can send the mail
	sendMail(subject, name, message, email)
}

func getFormData(r *http.Request) (name, email, subject, message, recaptchaResponse string, err error) {
	err = r.ParseForm()
	if err != nil {
		err = fmt.Errorf("ParseForm() err: %v", err)
		return
	}
	name = html.EscapeString(r.FormValue("name"))
	email = r.FormValue("email")
	subject = html.EscapeString(r.FormValue("subject"))
	message = html.EscapeString(r.FormValue("message"))
	recaptchaResponse = r.FormValue("g-recaptcha-response")
	return
}

func urlParam(r *http.Request, name string) (string, error) {
	keys, ok := r.URL.Query()[name]
	if !ok || len(keys[0]) < 1 {
		return "", fmt.Errorf("Url Param %v is missing", name)
	}
	return keys[0], nil
}

func sendMail(subject, name, message, email string) {
	mailjetClient := mailjet.NewMailjetClient(os.Getenv("MJ_APIKEY_PUBLIC"), os.Getenv("MJ_APIKEY_PRIVATE"))
	messagesInfo := []mailjet.InfoMessagesV31{
		// Mail to admin
		mailjet.InfoMessagesV31{
			From: &mailjet.RecipientV31{
				Email: "contact@airthee.com",
				Name:  "Contact - Airthee",
			},
			To: &mailjet.RecipientsV31{
				mailjet.RecipientV31{
					Email: "contact@airthee.com",
					Name:  "",
				},
			},
			ReplyTo: &mailjet.RecipientV31{
				Email: email,
				Name:  name,
			},
			TemplateID:       1236430,
			TemplateLanguage: true,
			Subject:          "Demande de contact via airthee.com",
			Variables: map[string]interface{}{
				"contact_subject": subject,
				"contact_name":    name,
				"contact_message": message,
				"contact_email":   email,
			},
		},
		// mail for the sender
		mailjet.InfoMessagesV31{
			From: &mailjet.RecipientV31{
				Email: "contact@airthee.com",
				Name:  "Contact - Airthee",
			},
			To: &mailjet.RecipientsV31{
				mailjet.RecipientV31{
					Email: email,
					Name:  name,
				},
			},
			TemplateID:       1240402,
			TemplateLanguage: true,
			Subject:          "Confirmation de votre demande de contact",
			Variables: map[string]interface{}{
				"message": message,
			},
		},
	}
	messages := mailjet.MessagesV31{Info: messagesInfo}
	res, err := mailjetClient.SendMailV31(&messages)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Data: %+v", res)
}

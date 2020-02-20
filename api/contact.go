package handler

import (
	"fmt"
	"log"
	"net/http"
	"os"

	mailjet "github.com/mailjet/mailjet-apiv3-go"
)

// Handler is the main function exported to Serverless service
func Handler(w http.ResponseWriter, r *http.Request) {
	// Test captcha
	// TODO
	// ...

	// Get contact infos
	name, email, subject, message, err := getFormData(r)
	if err != nil {
		fmt.Fprintf(w, err.Error())
	}
	sendMail(subject, name, message, email)
	fmt.Fprintf(w, "OK\n")
}

func getFormData(r *http.Request) (name, email, subject, message string, err error) {
	err = r.ParseForm()
	if err != nil {
		err = fmt.Errorf("ParseForm() err: %v", err)
		return
	}
	name = r.FormValue("name")
	email = r.FormValue("email")
	subject = r.FormValue("subject")
	message = r.FormValue("message")
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

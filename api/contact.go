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
	name, email, subject, message, err := parseParams(r)
	if err != nil {
		fmt.Fprintf(w, err.Error())
	}

	fmt.Fprintf(w, "Subject : %v\n", subject)
	fmt.Fprintf(w, "Name : %v\n", name)
	fmt.Fprintf(w, "Message : %v\n", message)
	fmt.Fprintf(w, "Email : %v\n", email)
	sendMail(subject, name, message, email)
}

func parseParams(r *http.Request) (name, email, subject, message string, err error) {
	name, err = urlParam(r, "name")
	if err != nil || len(name) == 0 {
		err = fmt.Errorf("Param name invalid")
		return
	}

	email, err = urlParam(r, "email")
	if err != nil || len(email) == 0 {
		err = fmt.Errorf("Param email invalid")
		return
	}

	subject, err = urlParam(r, "subject")
	if err != nil || len(subject) == 0 {
		err = fmt.Errorf("Param subject invalid")
		return
	}

	message, err = urlParam(r, "message")
	if err != nil || len(message) == 0 {
		err = fmt.Errorf("Param message invalid")
		return
	}

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
		mailjet.InfoMessagesV31{
			From: &mailjet.RecipientV31{
				Email: "contact@airthee.com",
				Name:  "Contact - Airthee",
			},
			To: &mailjet.RecipientsV31{
				mailjet.RecipientV31{
					Email: os.Getenv("CONTACT_EMAIL"),
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
	}
	messages := mailjet.MessagesV31{Info: messagesInfo}
	res, err := mailjetClient.SendMailV31(&messages)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("Data: %+v", res)
}

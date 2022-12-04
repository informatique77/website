import React, { useRef, useState } from "react"
import { Link } from "gatsby"

export default function FormAssistant() {
  const formRef = useRef(null)
  const [submitted, setSubmitted] = useState(false);

  const sendFormData = async event => {
    event.preventDefault()

    if (!formRef.current) {
      console.log("Something wrong with this ref")
      return
    }

    const formData = new FormData(formRef.current)

    fetch("https://formcarry.com/s/j3VUZlwpu", {
      method: "POST",
      body: formData,
      headers: {
        // you don't have to set Content-Type
        // otherwise it won't work due to boundary!
        Accept: "application/json",
      },
    })
      // convert response to json
      .then(r => r.json())
      .then(res => {
        if (res.code === 200) {
          setSubmitted(true);
        }
      })
  }

  if (submitted) {
    return (
      <section className="submited-container">
        <h3>Message envoyé !</h3>
        <Link to="/">Revenir à la page d'accueil</Link>
      </section>
    );
  }

  return (
    <section className="formcarry-container">
      <form ref={formRef} onSubmit={sendFormData}>
        <div className="formcarry-block">
          <label htmlFor="firstNameInput">Nom *</label>
          <input type="text" id="firstNameInput" name="firstName" required/>
        </div>
        <div className="formcarry-block">
          <label htmlFor="LastNameInput">Prénon *</label>
          <input type="text" id="LastNameInput" name="lastName" required/>
        </div>
        <div className="formcarry-block">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="formcarry-block">
          <label htmlFor="phone">Téléphone *</label>
          <input type="tel" id="phone" name="phone" placeholder="exemple: 0493121113" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" required/>
        </div>
        <div className="formcarry-block">
          <label htmlFor="messageInput">Message</label>
          <textarea id="messageInput" name="message"></textarea>
        </div>
        <div className="formcarry-block">
          <label htmlFor="cv">CV *</label>
          <input type="file" id="cv" name="cv" required/>
        </div>
        <div className="formcarry-block legalMentions">
          <label htmlFor="legaleMentions">J'ai lu et j'accepte les <Link to="/mention-legales">CGU</Link> de Consultations 7 sur 7 *</label>
          <input
                type="checkbox"
                id="legalMentions"
                name="legalMentions"
                required
              />
        </div>
        <div className="formcarry-block">
          <button type="submit">Soumettre</button>
        </div>
      </form>
    </section>
  )
}

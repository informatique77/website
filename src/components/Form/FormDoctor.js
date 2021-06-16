import React from "react"
import FormButton from "../Buttons/FormButton"

import "./FormAssDoc.scss"

const FormDoctor = () => {
  return (
    <div className="doctor-form">
      <form name="contact-doctor" method="POST" data-netlify="true">
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact-doctor" />
        <div hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <div className="input-label-container">
          <input type="text" name="name-doctor" required />
          <label htmlFor="name-doctor" className="label-container">
            <span className="label-content">Nom</span>
          </label>
        </div>
        <div className="input-label-container">
          <input type="text" name="nickname-doctor" required />
          <label htmlFor="nickname-doctor" className="label-container">
            <span className="label-content">Prénom</span>
          </label>
        </div>
        <div className="input-label-container">
          <label className="select-label">
            Thésé :
            <select required required style={{width: "70px"}}>
              <option value="Choisir">Choisir</option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </label>
        </div>
        <div className="checkboxInput-label-container">
          <span>Spécialité :</span>
          <div className="checkbox-container">
            <label>
              Médecine générale
              <input
                type="checkbox"
                name="generale-doctor"
                className="personnal-checkbox"
              />
            </label>
          </div>
          <div className="checkbox-container">
            <label>
              Médecine d'urgence
              <input
                type="checkbox"
                name="urgence-doctor"
                className="personnal-checkbox"
              />
            </label>
          </div>
        </div>
        <div className="input-label-container">
          <input
            type="text"
            name="tel-doctor"
            required
          />
          <label htmlFor="tel-doctor" className="label-container">
            <span className="label-content">Téléphone</span>
          </label>
        </div>
        <div className="input-label-container">
          <input type="text" name="email-doctor" required />
          <label htmlFor="email-doctor" className="label-container">
            <span className="label-content">Adresse e-mail</span>
          </label>
        </div>
        <div className="input-label-container">
          <textarea name="message-doctor" required></textarea>
          <label
            htmlFor="message-doctor"
            className="label-container"
            id="texteareaLabel"
          >
            <span className="label-content">Message</span>
          </label>
        </div>
        <FormButton content="Soumettre" />
      </form>
    </div>
  )
}

export default FormDoctor

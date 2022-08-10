import React from "react"
import { Link } from "gatsby"


const FormAgent = () => {
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
        <div className="row-container">
          <div className="input-label-container">
            <input type="text" name="name-doctor" required />
            <label htmlFor="name-doctor" className="label-container">
              <span className="label-content">Nom *</span>
            </label>
          </div>
          <div className="input-label-container">
            <input type="text" name="nickname-doctor" required />
            <label htmlFor="nickname-doctor" className="label-container">
              <span className="label-content">Prénom *</span>
            </label>
          </div>
        </div>
        <div className="row-container">
          <div className="input-label-container">
            <input type="text" name="tel-doctor" required />
            <label htmlFor="tel-doctor" className="label-container">
              <span className="label-content">Téléphone *</span>
            </label>
          </div>
          <div className="input-label-container">
            <input type="text" name="email-doctor" required />
            <label htmlFor="email-doctor" className="label-container">
              <span className="label-content">Adresse e-mail *</span>
            </label>
          </div>
        </div>
        <div className="input-label-container">
          <textarea name="message-doctor" required></textarea>
          <label
            htmlFor="message-doctor"
            className="label-container"
            id="texteareaLabel"
          >
            <span className="label-content">Message *</span>
          </label>
        </div>
        <div className="input-label-container cv">
          <label

            htmlFor="cv-doctor"
            id="cvLabel"
          >
            <span>CV *</span>
          </label>
          <input className="input-cv" type="file" name="cv" required />
        </div>
        <div className="checkboxInput-label-container cgu">
          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                name="generale-doctor"
                className="personnal-checkbox"
                required
              />
              J'ai lu et j'accepte les <Link to="/mentions-legales">CGU</Link> de Consultations 7 sur 7 *
            </label>
          </div>
        </div>
        <div>
          <button type="submit" className="form-button">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormAgent
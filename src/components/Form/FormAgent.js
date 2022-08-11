import React from "react"
import { Link } from "gatsby"


const FormAgent = () => {
  return (
    <div className="doctor-form">
      <form name="contact-agent" method="POST" data-netlify="true">
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact-agent" />
        <div hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <div className="row-container">
          <div className="input-label-container">
            <input type="text" name="name-agent" required />
            <label htmlFor="name-agent" className="label-container">
              <span className="label-content">Nom *</span>
            </label>
          </div>
          <div className="input-label-container">
            <input type="text" name="nickname-agent" required />
            <label htmlFor="nickname-agent" className="label-container">
              <span className="label-content">Prénom *</span>
            </label>
          </div>
        </div>
        <div className="row-container">
          <div className="input-label-container">
            <input type="text" name="tel-agent" required />
            <label htmlFor="tel-agent" className="label-container">
              <span className="label-content">Téléphone *</span>
            </label>
          </div>
          <div className="input-label-container">
            <input type="text" name="email-agent" required />
            <label htmlFor="email-agent" className="label-container">
              <span className="label-content">Adresse e-mail *</span>
            </label>
          </div>
        </div>
        <div className="input-label-container">
          <textarea name="message-agent" required></textarea>
          <label
            htmlFor="message-agent"
            className="label-container"
            id="texteareaLabel"
          >
            <span className="label-content">Message *</span>
          </label>
        </div>
        <div className="input-label-container cv">
          <label

            htmlFor="cv-agent"
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
                name="generale-agent"
                className="personnal-checkbox"
                required
              />
              J'ai lu et j'accepte les <Link to="/mention-legales">CGU</Link> de Consultations 7 sur 7 *
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

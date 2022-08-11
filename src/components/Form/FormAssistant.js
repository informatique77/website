import React from "react"
import { Link } from "gatsby"

const FormAssistant = () => {
  return (
    <div className="assistant-form">
      <form name="contact-assistant" method="POST" enctype="multipart/form-data" data-netlify="true">
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact-assistant" />
        <div hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <div className="input-label-container">
          <input type="text" name="name-assistant" required />
          <label htmlFor="name-assistant" className="label-container">
            <span className="label-content">Nom *</span>
          </label>
        </div>
        <div className="input-label-container">
          <input type="text" name="nickname-assistant" required />
          <label htmlFor="nickname-assistant" className="label-container">
            <span className="label-content">Prénom *</span>
          </label>
        </div>
        <div className="input-label-container">
          <label className="select-label">
            Statut * :
            <select required style={{ width: "100px" }}>
              <option value="Choisir">Choisir</option>
              <option value="Diplômé(e)">Diplômé(e)</option>
              <option value="Stagiaire">Stagiaire</option>
            </select>
          </label>
        </div>
        <div className="checkboxInput-label-container">
          <span>Diplômes * pages-header-title:</span>
          <div className="checkbox-container">
            <label>
              Secrétaire Médicale
              <input
                type="checkbox"
                name="secretaire-medicale"
                className="personnal-checkbox"
                required
              />
            </label>
          </div>
          <div className="checkbox-container">
            <label>
              Aide-soignante
              <input
                type="checkbox"
                name="Aide-soignante"
                className="personnal-checkbox"
              />
            </label>
          </div>
        </div>
        <div className="input-label-container">
          <input type="text" name="tel-assistant" required />
          <label htmlFor="tel-assistant" className="label-container">
            <span className="label-content">Téléphone *</span>
          </label>
        </div>
        <div className="input-label-container">
          <input type="text" name="email-assistant" required />
          <label htmlFor="email-assistant" className="label-container">
            <span className="label-content">Adresse e-mail *</span>
          </label>
        </div>
        <div className="input-label-container">
          <textarea name="message-assistant" required></textarea>
          <label
            htmlFor="message-assistant"
            className="label-container"
            id="texteareaLabel"
          >
            <span className="label-content">Message *</span>
          </label>
        </div>
        <div className="input-label-container cv">
          <label

            htmlFor="cv-assistant"
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

export default FormAssistant

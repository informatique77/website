import React from "react"

import "./FormAssDoc.scss"

const FormAssistant = () => {
  return (
    <div className="assistant-form">
      <form name="contact-assistant" method="POST" data-netlify="true">
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact-assistant" />
        <div hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <p>
          <label>
            Nom <input type="text" name="name-assistant" />
          </label>
        </p>
        <p>
          <label>
            Prénom <input type="text" name="nickname-assistant" />
          </label>
        </p>
        <p>
          <div>
            <label>
              Statut:
              <select>
                <option value="">--Please choose an option--</option>
                <option value="Diplômé(e)">Diplômé(e)</option>
                <option value="Stagiaire">Stagiaire</option>
              </select>
            </label>
          </div>
        </p>
        <p>
          Diplômes:{" "}
          <div>
            <label>
              Secrétaire Médicale
              <input type="checkbox" name="secretaire-medicale" />
            </label>
          </div>
          <div>
            <label>
              Aide-soignante
              <input type="checkbox" name="Aide-soignante" />
            </label>
          </div>
          <div>
            <label>
              Assistante Médicale
              <input type="checkbox" name="Assistante Médicale" />
            </label>
          </div>
          <div>
            <label>
              Autre :
              <input type="checkbox" name="Autre Assistante" />
              <input
                type="text"
                name="precise"
                placeholder="Précisez"
              />
            </label>
          </div>
        </p>
        <p>
          <label>
            Téléphone:{"  "}
            <input
              type="tel"
              name="tel-assistant"
              pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
            />
          </label>
        </p>
        <p>
          <label>
            Adresse e-mail: <input type="email" name="email-assistant" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message-assistant"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Soumettre</button>
        </p>
      </form>
    </div>
  )
}

export default FormAssistant

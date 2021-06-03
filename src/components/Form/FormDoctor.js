import React from "react"

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
        <p>
          <input type="text" name="name-doctor" />
          <label for="name-doctor">
            <span>Nom :</span>
          </label>
        </p>
        <p>
          <input type="text" name="nickname-doctor" />
          <label for="nickname-doctor">
            <span>Prénom :</span>
          </label>
        </p>
        <p>
          <div>
            <label>
              Thésé :
              <select>
                <option value="">--Please choose an option--</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </label>
          </div>
        </p>
        <p>
          Spécialité :{" "}
          <div>
            <label>
              Médecine générale
              <input type="checkbox" name="generale-doctor" />
            </label>
          </div>
          <div>
            <label>
              Médecine d'urgence
              <input type="checkbox" name="urgence-doctor" />
            </label>
          </div>
        </p>
        <p>
          <input
            type="tel"
            name="tel-doctor"
            pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
          />
          <label for="tel-doctor"> 
            <span>Téléphone :</span>
          </label>
        </p>
        <p>
          <input type="email" name="email-doctor" />
          <label for="email-doctor">
            <span>Adresse e-mail :</span>
          </label>
        </p>
        <p>
          <textarea name="message-doctor"></textarea>
          <label for="message-doctor">
            <span>Message :</span>
          </label>
        </p>
        <p>
          <button type="submit">Soumettre</button>
        </p>
      </form>
    </div>
  )
}

export default FormDoctor

import React from "react"

const NewsLetter = () => {
  return (
    <div className="form-container">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </div>
        <p>
          <label htmlFor={"email"} required={true}>
            Newsletter{" "}
            <input type="email" name="email" placeholder="Email" required />
          </label>
        </p>
        <p>
          <button type="submit">Envoyer</button>
        </p>
      </form>
    </div>
  )
}

export default NewsLetter

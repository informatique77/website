import React from "react"

const FormButton = ({ content }) => {
    return (
        <div>
            <button type="submit" className="form-button">{ content }</button>
        </div>
    )
}

export default FormButton
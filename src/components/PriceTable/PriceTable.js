import * as React from "react"

const PriceTable = ({ country, image, resume }) => {
    return (
        <div className="prices-resume">
            <div className="container-flag">
                <h3>{country}</h3>
                {image}
            </div>
            <hr></hr>
            <div className="container-resume">
                {resume}
            </div>
        </div>
    )
}

export default PriceTable
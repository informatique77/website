import * as React from "react"
import logo from "../../assets/images/small-logo.png"

const Redirection = () => {
    return (
        <div className="redirection">
            <h2>Consultations 7 sur 7 devient</h2>
            <a href="https://www.c7sante.org/">
                <img src={logo} />
            </a>
        </div>
    )
}

export default Redirection
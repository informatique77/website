import React from 'react'
import { Link } from "gatsby"

const Button = ({ buttonType, buttonLabel, css, link, icon }) => {
    switch (buttonType) {
        case 'regular':
            return <Link to={link} className={"btn " + css}>{buttonLabel}</Link>
        case 'with icon':
            return <Link to={link} className={"btn " + css}><img src={icon} />{buttonLabel}</Link>
        case 'link':
            return <a href={link} className={"btn " + css}><img src={icon} />{buttonLabel}</a>
    }
}

export default Button
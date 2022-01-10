import React from "react"
import { Link } from "gatsby"

import { burgerAnimation } from "../../utils/burgerAnimation"

import { MenuItems } from "../../data/navigation"

const Burger = () => {
  return (
    <>
      <div
        className="burger"
        role="button"
        tabIndex={0}
        aria-label="burger-trigger-animation"
        onClick={burgerAnimation}
        onKeyDown={burgerAnimation}
      >
        <button className="btn-burger" aria-label="burger-bar-animation">
          <span className="bar bar--1"></span>
          <span className="bar bar--2"></span>
        </button>
      </div>
      <div className="list">
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} tabIndex={index}>
                <Link
                  to={item.url}
                  onClick={burgerAnimation}
                  onKeyPress={burgerAnimation}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Burger

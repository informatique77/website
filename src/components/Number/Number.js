import React, { useState, useRef } from "react"
import useVisibilitySensor from "@rooks/use-visibility-sensor"

import "./Number.scss"

const Number = ({ img, number, text }) => {
  const [count, setCount] = useState(0)
  const rootNode = useRef(null)
  const { isVisible, visibilityRect } = useVisibilitySensor(rootNode, {
    intervalCheck: false,
    scrollCheck: true,
    resizeCheck: true,
  })

  const increment = () => {
    count < number && setTimeout(() => setCount(count + 1), 50)
    return count
  }

  return (
    <div className="number-container" ref={rootNode}>
      <div className="img-number">{img}</div>
      <span className="the-number">
        {isVisible ? increment() : count}
      </span>
      <p className="text-number">{text}</p>
    </div>
  )
}

export default Number

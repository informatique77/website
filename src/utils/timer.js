import React from "react"

export const openingOfCenter = () => {
  const start = 8 * 60 + 30
  const end = 22 * 60
  const date = new Date()
  const now = date.getHours() * 60 + date.getMinutes()

  return start <= now && now <= end ? true : false
}

export const openingOfTeleconsultations = () => {
  const start = 8 * 60
  const end = 21 * 60
  const date = new Date()
  const now = date.getHours() * 60 + date.getMinutes()

  return start <= now && now <= end ? true : false
}

export const openOrClose = index => {
  return index === 0 ? (
    <p className={openingOfTeleconsultations() ? "open" : "close"}>
      {openingOfTeleconsultations() ? "Ouvert en ce moment" : "Fermé"}
    </p>
  ) : (
    <p className={openingOfCenter() ? "open" : "close"}>
      {openingOfCenter() ? "Ouvert en ce moment" : "Fermé"}
    </p>
  )
}
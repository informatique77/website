/**
 * Animation déclenchée au clique sur le burger
 */
export const burgerAnimation = () => {
  document.body.classList.toggle("menu-open")
  document.querySelector(".btn-burger").classList.toggle("active")
  document.querySelector(".list").classList.toggle("list-open")
}

/**
 * Fermerture du burger si il est ouvert lors d'un clique sur un bouton d'une page, 
 * ou si l'utilisateur utilise les flèches de navigation de son navigateur
 */
export const closeBurger = () => {
  document.body.classList.remove("menu-open")
  document.querySelector(".btn-burger").classList.remove("active")
  document.querySelector(".list").classList.remove("list-open")
}
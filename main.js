const menuButton = document.querySelector(".menu-button")
const closeButton = document.querySelector(".close-button")
const body = document.querySelector("body")
const overlay = document.querySelector(".overlay")
const nav = document.querySelector(".nav-list")
const desktop = window.matchMedia("(width > 900px)")

function openMenu() {
  overlay.classList.remove("closed")
  nav.style.display = "block"
  nav.style.transform = "translateX(0%)"
  nav.style.animation = "slide-in .2s"
  menuButton.classList.add("opened")
  closeButton.style.transform = "translateY(0)"
  closeButton.style.transition = "all .05s ease-in-out"
  body.classList.add("fixed")
}

function closeMenu() {
  overlay.classList.add("closed")
  nav.style.display = "none"
  nav.style.transform = "translateX(100%)"
  menuButton.classList.remove("opened")
  closeButton.style.transform = "translateY(-10vh)"
  body.classList.remove("fixed")
  
}

function desktopNav() {
  if (desktop.matches) {
  nav.style.transform = "translateX(0%)"
  nav.style.display = "block"
} else {
  nav.style.transform = "translateX(100%)"
  nav.style.transition = "none"
}
}



menuButton.addEventListener("click", openMenu)
closeButton.addEventListener("click", closeMenu)
desktop.addEventListener('change', desktopNav)
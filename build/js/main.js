const initApp = () => {
  const hamburgetBtn = document.getElementById("hamburger-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("flex")
    hamburgetBtn.classList.toggle("toggle-btn")
  }
  hamburgetBtn.addEventListener("click", toggleMenu)
  mobileMenu.addEventListener("click", toggleMenu)
}

// chama o initApp após o dom está todo carregado
document.addEventListener("DOMContentLoaded", initApp)

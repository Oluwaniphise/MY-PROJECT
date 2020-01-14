
   var togglebutton = document.getElementsByClassName("toggle-button")[0];
   var navLinks = document.getElementsByClassName("nav-links")[0];
   
  togglebutton.addEventListener("click", () => {
    navLinks.classList.toggle("active")
})

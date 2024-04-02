const navMenu = document.querySelector('.nav-menu');
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;';

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.querySelector('header').appendChild(menuToggle);
 
const arhanLink = document.getElementById("arhanLink");
arhanLink.addEventListener("click", function() {
  window.location.href = "Robot.html";
});
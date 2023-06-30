import styles from "./style.css"

const navSlide = () => {
  const hamburguesa = document.querySelector('.hamburguesa');
  const redes = document.querySelector('.redes');
  const navLinks = document.querySelectorAll('.redes li');
  
  hamburguesa.addEventListener('click', () => {
      // Toggle Nav
      redes.classList.toggle('nav-active'); 

      // Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      hamburguesa.classList.toggle('toggle');        
  });
}

navSlide();

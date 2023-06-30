import './style.css'

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.navbar').classList.add('animate');
    document.querySelector('.menu').classList.add('animate');
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.add('animate');
    });
  });
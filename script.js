/* Gracias a Jason Houston de CodePen.io y a W3 schools por sus tutoriales */

/* Botón para volver arriba*/
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

/* Colores*/

const name = document.querySelector(".colores");

function changeColor(color) {
   name.style.color = color;
}

/* Leer Más*/

const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if(!isReadMoreBtn) return;
    const currentText = event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent.includes('Más') ? "Menos..." : "Más...";
})

/* Header dinámico*/

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 
console.log('Hello Webpack Encore! Edit me in assets/js/script.js');
// Burger menus

  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');
  console.log("HERE")
  console.log("menu",menu)
  if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
      for (var i = 0; i < close.length; i++) {
          close[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

//HANDLE MODAL
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalText = modal.querySelector('.modal-text');

  const voirDetailsButtons = document.querySelectorAll('.voir-details');
  voirDetailsButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Récupérer les données de l'actualité correspondante et mettre à jour la modale
          const actualite = button.parentNode.parentNode;
          console.log(actualite);
          const title = actualite.querySelector('h1').textContent;
          const text = actualite.querySelector('p').textContent;
          modalTitle.textContent = title;
          modalText.textContent = text;
          console.log(modalTitle, modalText);

          modal.style.display = 'block';
      });
  });

  const closeModal = () => {
      modal.style.display = 'none';
  };

  // Fermer la modale lorsque l'utilisateur clique sur le bouton de fermeture
  modal.querySelector('.close').addEventListener('click', closeModal);

  // Fermer la modale lorsque l'utilisateur clique à l'extérieur de celle-ci
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          closeModal();
      }
  });
});














//smooth scroll
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop,
    });
  };

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });
//Navbar switch color
  document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');
    var logo = document.querySelector('.logo');
    window.addEventListener("scroll", function() {
      if (window.scrollY > 20) {
        navbar.classList.add("addsticky");
        navbar.classList.add("shadow-xl");
        logo.src ="../src/images/white-logo.png"

      } else {
        navbar.classList.remove("addsticky");
        navbar.classList.remove("shadow-xl");
        logo.src ="../src/images/logo.png"


      }
    });

    // Carousel icones

let defaultTransform3 = 0;
const slideInterval3 = 4000; // Temps en millisecondes entre chaque diapositive
const next3 = document.getElementById("next3");
const prev3 = document.getElementById("prev3");
function autoSlide3() 
{
  goNext3(); // Appeler la fonction pour aller à la diapositive suivante
  setTimeout(autoSlide3, slideInterval3); // Appeler à nouveau la fonction après le délai spécifié
}
function goNext3() {
    defaultTransform3 = defaultTransform3 - 398;
    var slider3 = document.getElementById("slider3");
    if (Math.abs(defaultTransform3) >= slider3.scrollWidth / 1.7) defaultTransform3 = 0;
    slider3.style.transform = "translateX(" + defaultTransform3 + "px)";
}
next3.addEventListener("click", goNext3);
function goPrev3() {
    var slider3 = document.getElementById("slider3");
    if (Math.abs(defaultTransform3) === 0) defaultTransform3 = 0;
    else defaultTransform3 = defaultTransform3 + 398;
    slider3.style.transform = "translateX(" + defaultTransform3 + "px)";
}
prev3.addEventListener("click", goPrev3);
autoSlide3();


    



  });


//Carousel actualités
let defaultTransform = 0;
const slideInterval = 4000; // Temps en millisecondes entre chaque diapositive
const next = document.getElementById("next");
const prev = document.getElementById("prev");
function autoSlide() {
  goNext(); // Appeler la fonction pour aller à la diapositive suivante
  setTimeout(autoSlide, slideInterval); // Appeler à nouveau la fonction après le délai spécifié
}
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
prev.addEventListener("click", goPrev);
autoSlide();

//Carousel temoignages
let defaultTransform2 = 0;
const slideInterval2 = 4000; // Temps en millisecondes entre chaque diapositive
const next2 = document.getElementById("next2");
const prev2 = document.getElementById("prev2");
function autoSlide2() 
{
  goNext2(); // Appeler la fonction pour aller à la diapositive suivante
  setTimeout(autoSlide2, slideInterval2); // Appeler à nouveau la fonction après le délai spécifié
}
function goNext2() {
    defaultTransform2 = defaultTransform2 - 398;
    var slider2 = document.getElementById("slider2");
    if (Math.abs(defaultTransform2) >= slider2.scrollWidth / 1.7) defaultTransform2 = 0;
    slider2.style.transform = "translateX(" + defaultTransform2 + "px)";
}
next2.addEventListener("click", goNext2);
function goPrev2() {
    var slider2 = document.getElementById("slider2");
    if (Math.abs(defaultTransform2) === 0) defaultTransform2 = 0;
    else defaultTransform2 = defaultTransform2 + 398;
    slider2.style.transform = "translateX(" + defaultTransform2 + "px)";
}
prev2.addEventListener("click", goPrev2);
autoSlide2();




//Back to top button
const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

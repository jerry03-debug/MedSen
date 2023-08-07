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
  });

  let defaultTransform = 0;
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
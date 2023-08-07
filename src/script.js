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
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 20) {
        navbar.classList.add("addsticky");
        navbar.classList.add("shadow-xl");
      } else {
        navbar.classList.remove("addsticky");
        navbar.classList.remove("shadow-xl");


      }
    });
  });
  
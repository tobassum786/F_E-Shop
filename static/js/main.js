let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


function toggleMenu() {
    var menuToggle = document.querySelector('.burger-menu');
    var menu = document.querySelector('#menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}
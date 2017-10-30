

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);}

function currentSlide(n) {
  showSlides(slideIndex = n);}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
    
    
var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Slider end

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Dropdown

$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);},
    
  function () {
    $('ul', this).stop().slideUp(100);}
);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Dropdown end








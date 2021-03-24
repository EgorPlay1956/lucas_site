
var slides = document.getElementsByClassName('slide');
var currentSlide = 2;

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}




var slideInterval = setInterval(() => nextSlide(), 2000);

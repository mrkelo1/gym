const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar__menu");
const body = document.querySelector("body")
let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

menu.addEventListener("click" , () =>{
    menu.classList.toggle("is-active");
    menulinks.classList.toggle("active");
    body.classList.toggle("active");
});




const updateslideposition = () => {
    for(let slide of slides){
        slide.classList.remove('slideshow-img-visible');
        slide.classList.add('slideshow-img-hidden');
    }
    
}

document.
  querySelector('#carousel__button--next')
  .addEventListener("click", ()=> {
    moveToNextSlide();
  });
document.
  querySelector('#carousel__button--prev')
  .addEventListener("click", ()=> {
    moveToPrevSlide();
  });

const updateSlidePosition = () => {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

const moveToNextSlide = () => {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

const moveToPrevSlide = ()=> {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();}
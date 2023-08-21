const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow-desktop');
const rightArrow = document.querySelector('.right-arrow-desktop');

const leftArrowMobile = document.querySelector('.left-arrow-mobile');
const rightArrowMobile = document.querySelector('.right-arrow-mobile');

const slideWidth = slider.clientWidth;
const totalSlides = slider.children.length;

let currentPosition = 0;

  // Function to slide left
function slideLeft() {
  
    currentPosition += slideWidth;  

    if (currentPosition > 0) {
      currentPosition = -slideWidth * (totalSlides - 1);

    } 

    slider.style.transform = `translateX(${currentPosition}px)`;
    updateContent();
}

  // Function to slide right
function slideRight() {
  
    currentPosition -= slideWidth;
  
    if (currentPosition < -slideWidth * (totalSlides - 1)) {
      currentPosition = 0;

    }

    slider.style.transform = `translateX(${currentPosition}px)`;
    updateContent();
}

leftArrow.addEventListener('click', slideLeft);
rightArrow.addEventListener('click', slideRight);

leftArrowMobile.addEventListener('click', slideLeft);
rightArrowMobile.addEventListener('click', slideRight);
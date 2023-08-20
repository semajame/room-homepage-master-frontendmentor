

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const slideWidth = slider.clientWidth;
const totalSlides = slider.children.length;

const headerActive = document.querySelectorAll('.header');
const paragraphActive = document.querySelectorAll('.paragraph');

const objects = [{
  header: 'Discover innovative ways to decorate',
  paragraph: ' We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
}]

let headerParagraph = '';

objects.forEach((object)=>{
  headerParagraph += 
  
  ` <h1 class="header active"> ${object.header} </h1>

    <p class="paragraph active">
    ${object.paragraph}
    </p>
`
})

const rightContent = document.querySelector(".header-para");

rightContent.innerHTML = headerParagraph;

let currentPosition = 0;

function updateContent() {
  const currentSlideIndex = Math.abs(currentPosition) / slideWidth;
  const slides = slider.children;

  for (let i = 0; i < totalSlides; i++) {
    if (i === currentSlideIndex) {
      rightContent.style.display = "none";
      headerActive[i].classList.add('active');
      paragraphActive[i].classList.add('active');
    } else {
      headerActive[i].classList.remove('active');
      paragraphActive[i].classList.remove('active');
    }
  }
}

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
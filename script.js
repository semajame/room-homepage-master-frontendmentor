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

function updateContent() {
    const currentSlideIndex = Math.abs(currentPosition) / slideWidth;

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

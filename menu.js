const hamburger = document.querySelector(".hamburger");

const close = document.querySelector(".close-icon");

const nav = document.querySelector("nav");

hamburger.addEventListener("click",()=>{
    nav.classList.add("active");
})

close.addEventListener("click",()=>{
    nav.classList.remove("active");
})
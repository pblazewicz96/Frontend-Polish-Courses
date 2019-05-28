
const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");

burger.addEventListener("click", function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show")
    }
})


// $(".burger").on("click", function () {
//     $(".fas, aside, .wrapper").toggleClass("show");
// })


// const burger = document.querySelector(".burger");

// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const column = document.querySelector("aside");
// const wrapper = document.querySelector(".wrapper");

// burger.addEventListener("click", function () {
//     iconBurger.classList.toggle("show");//tak
//     iconX.classList.toggle("show");//nie
//     column.classList.toggle("show");//nie
//     wrapper.classList.toggle("show");//nie


// })
// window.addEventListener('scroll', function () {
//  console.log("skrolujesz!")
// })

// konkatenacja
// document.addEventListener('scroll', function () {
//  console.log("skrolujesz o " + window.scrollY + "px")
// })

// użycie zadeklarowanej funkcji
// function showScrollSize() {
//  console.log("skrolujesz o " + window.scrollY + "px")
// }

// window.addEventListener('scroll', showScrollSize);



const spanResult = document.querySelector('span');

window.addEventListener('scroll', function () {
 spanResult.textContent = window.scrollY;
})
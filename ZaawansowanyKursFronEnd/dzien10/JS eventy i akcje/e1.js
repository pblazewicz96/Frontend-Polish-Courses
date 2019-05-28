// 1 etap
const btn = document.querySelector('button');
const paragraph = document.querySelector('p');

// Element.addEventListener('jaki wydarzenie', 'co ma się stać')
// btn.addEventListener('click', function () {
//  console.log("klik!");
//  paragraph.style.backgroundColor = "red";
// })

// btn.addEventListener('mouseover', function () {
//  console.log("najechanie");
// })

// btn.addEventListener('mousemove', function () {
//  console.log("ruch myszką");
// })

// btn.addEventListener('click', function () {
//  alert("kliknąłeś!");
// })


let clicksNumber = 0;

btn.addEventListener('click', function () {
 // clicksNumber = clicksNumber + 1;
 clicksNumber++; //inkrementacja
 // clicksNumber = clicksNumber + 2;
 // clicksNumber += 2;
 console.log("klik numer: ", clicksNumber)
})


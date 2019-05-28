// tutaj rozwiązanie

const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let fontSize = 10;

// //Pętla
// btn.addEventListener('click', function () {
//   fontSize++;
//   for (let i = 0; i < li.length; i++) {
//     // if (!li[i].style.display) {
//     //   li[i].style.display = 'block';
//     // }
//     li[i].style.display = 'block';
//     li[i].style.fontSize = fontSize + 'px';
//   }
// })

//For each

btn.addEventListener('click', () => {
  li.forEach((lis) => {
    lis.style.display = 'block';
    lis.style.fontSize = `${fontSize}px`;
  })
  fontSize++;
})
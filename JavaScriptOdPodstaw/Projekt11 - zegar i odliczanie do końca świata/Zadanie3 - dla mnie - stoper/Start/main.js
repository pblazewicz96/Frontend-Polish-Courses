// http://websamuraj.pl/examples/js/projekt11/

const start = document.querySelector('button.main')
const reset = document.querySelector('button.reset')
const divTime = document.querySelector('div.time div')

let time = 0
let timeAdd = 0.01
let stop;

let check = true

const startButton = () => {

  if (check) {
    start.textContent = "Pauza";
    check = !check
    stop = setInterval(startStoper, 10)
  } else if (check === false) {
    start.textContent = 'Start'
    check = !check
    clearInterval(stop)
  }

}

const startStoper = () => {

  time += timeAdd
  divTime.textContent = time.toFixed(2);

}
const resetButton = () => {
  time = 0;
  divTime.textContent = '---'
  clearInterval(stop)
  start.textContent = 'Start';
  check = !check
}


start.addEventListener('click', startButton)
reset.addEventListener('click', resetButton)
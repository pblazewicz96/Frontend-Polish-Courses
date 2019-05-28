document.body.style.height = 10000 + "px";
const div = document.createElement('div');
document.body.appendChild(div);

let grow = true; //flaga

let size = 100; //wielkość kwadratu
div.style.width = '100%';
div.style.position = 'fixed';
div.style.left = 0;
div.style.top = 0;
div.style.backgroundColor = 'green';
div.style.height = size + 'px';

const changeHeight = function () {
  // if (size >= window.innerHeight / 2) {
  //   grow = !grow;
  // } else if (size <= 0) {
  //   grow = !grow;
  // }

  // if (grow) {
  //   size += 10
  //   div.style.height = size + "px";
  // } else {
  //   size -= 10
  //   div.style.height = size + "px";
  // }

  if (size > window.innerHeight / 2) {
    // grow = false;
    grow = !grow;
    div.style.backgroundColor = 'red';
  } else if (size <= 0) {
    grow = !grow;

    div.style.backgroundColor = 'green';
  }

  if (grow) {
    size += 10;

  } else {
    size -= 10;
  }
  div.style.height = size + 'px';
}

window.addEventListener('scroll', changeHeight)
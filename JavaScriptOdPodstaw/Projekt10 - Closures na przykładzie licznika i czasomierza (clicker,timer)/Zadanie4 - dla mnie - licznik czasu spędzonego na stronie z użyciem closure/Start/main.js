const timer = () => {
  let number = 0;
  // document.body.textContent = `${0} sekund`;

  function countNumber() {
    number++;
    document.body.textContent = `${number} sekund`;
    setTimeout(countNumber, 1000);
  }
  return countNumber();
}
timer();
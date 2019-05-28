const spnText = document.querySelector('.text');
const txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam dicta alias quibusdam atque, quidem sequi est esse magnam rerum. Reprehenderit, assumenda! Assumenda nesciunt error iure voluptatibus, ducimus harum ad doloremque ipsa debitis sunt nihil, quis doloribus repellat eaque excepturi quaerat tempore natus cupiditate porro ex unde alias distinctio aliquam. Officia possimus laboriosam eligendi, neque animi, pariatur fugit cum numquam eum vel voluptatum rerum! Dolores mollitia doloremque nam inventore deserunt illum, rerum cumque illo maiores repellendus consequatur et excepturi exercitationem temporibus laudantium tempora quaerat reiciendis porro omnis quos eum fuga! Pariatur quidem accusamus velit maxime id. Asperiores officiis perferendis ipsa quibusdam!"

let indexText = 0;

const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText == txt.length) clearInterval(indexTyping);

}

const indexTyping = setInterval(addLetter, 50);
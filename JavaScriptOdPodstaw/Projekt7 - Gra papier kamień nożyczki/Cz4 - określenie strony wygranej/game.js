// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
 numbers: 0,
 wins: 0,
 losses: 0,
 draws: 0,
}

const game = {
 playerHand: "",
 aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

// Pierwsza funkcja
function handSelection() {

 game.playerHand = this.dataset.option
 console.log(game.playerHand);
 hands.forEach(hand => hand.style.boxShadow = '');
 this.style.boxShadow = '0 0 0 4px red';
}

// const handSelection = (e) => {
//  // this - nie tworzy
//  console.log(e.target);
//  console.log(e.currentTarget);
// }

function aiChoice() {
 return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
 // console.log(player, ai);
 if (player === ai) {
  return 'draw';
 } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
  return 'win';
 } else { return 'loss'; }
}

//funkcja sterująca
function startGame() {
 if (!game.playerHand) {
  return alert("wybierz dłoń!!!!");
 }
 game.aiHand = aiChoice();
 const gameResult = checkResult(game.playerHand, game.aiHand);
 console.log(gameResult);
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)


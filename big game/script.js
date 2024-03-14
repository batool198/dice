const scor1El = document.querySelector("#score--0");
const scor2El = document.querySelector("#score--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");

const current1EL = document.querySelector("#current--0");
const current2EL = document.querySelector("#current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

scor1El.textContent = 0;
scor2El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  const num = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${num}.png`;

  if (num !== 1) {
    currentScore += num;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to the next player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});

btnHold.addEventListener("click", function () {
  //1: add current score to active player
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
  //2:check if the player score than100 then the player is win
  if (document.querySelector(`#score--${activePlayer}`).textContent > 100) {
    alert("wwwwwwwwwwwwwwwwwwwwww");
  }
  //3:switch to the next player
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
});

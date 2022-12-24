var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var lessDots1 = 1;
var lessDots2 = 1;

var text1 = document.querySelector("header > h1");

var gridFirstCube = document.querySelector(".cube1");
var gridSecondCube = document.querySelector(".cube2");

var cubeFirstDots = document.querySelectorAll(".cube1 .dot");
var cubeSecondDots = document.querySelectorAll(".cube2 .dot");

function rolling(randomNumber, lessDots, cubeDots, gridCube) {
  if (randomNumber !== 6) {
    lessDots = 6 - randomNumber;
    for (i = 0; i < lessDots; i++) {
      cubeDots[i].classList.add("invisible");
    }
  }
  switch (randomNumber) {
    case 6:
      gridCube.style.gridTemplateAreas = ' "a b" "c d" "e f" ';
      break;
    case 5:
      gridCube.style.gridTemplateColumns = "repeat(3, 1fr)";
      gridCube.style.gridTemplateAreas = ' "b . c" " . d . " " e . f " ';
      break;
    case 4:
      gridCube.style.gridTemplateRows = "repeat(2, 1fr)";
      gridCube.style.gridTemplateAreas = ' "c d" "e f" ';
      break;
    case 3:
      gridCube.style.gridTemplateColumns = "repeat(3, 1fr)";
      gridCube.style.gridTemplateAreas = ' ". . d" ". e ." "f . ." ';
      break;
    case 2:
      gridCube.style.gridTemplateAreas = ' ". ." "e f" ". ."';
      break;
    case 1:
      gridCube.style.gridTemplateColumns = "repeat(3, 1fr)";
      gridCube.style.gridTemplateAreas = ' ". . ." ". f ." ". . ." ';
      break;
  }
}

function rollDice() {
  if (randomNumber1 > randomNumber2) {
    text1.textContent = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    text1.textContent = "Player 2 Wins!";
  } else {
    text1.textContent = "Roll Again";
  }
}

if (performance.getEntriesByType("navigation")[0].type === "reload") {
  rollDice();
}

rolling(randomNumber1, lessDots1, cubeFirstDots, gridFirstCube);
rolling(randomNumber2, lessDots2, cubeSecondDots, gridSecondCube);

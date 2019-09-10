// var game = {
//   player1 = "X",
//   player2 = "O",
//   currentPlayer = "player1",
//   moveCount = 0,
//   clickCount = moveCount,
// }

// player1Sel = new Array();
// player2Sel = new Array();
let squares = document.querySelectorAll(".square");
let tLeft = document.getElementsByClassName(".top .left");
let tCenter = document.getElementsByClassName(".top .middle");
let tRight = document.getElementsByClassName(".top .right");
let mLeft = document.getElementsByClassName("middle left");
let mCenter = document.getElementsByClassName("middle center");
let mRight = document.getElementsByClassName("middle right");
let bLeft = document.getElementsByClassName("bottom left");
let bCenter = document.getElementsByClassName("bottom middle");
let bRight = document.getElementsByClassName("bottom right");
let winnerIs = document.getElementsByClassName("#winnerCircle");
let anywhere = document.getElementById("#board");

let x = 0;
let w = 0;
let gameOver = 0;
let count = 0;

var winCombo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [(3, 5, 7)]
];

//
//

function isEven(x) {
  return x % 2 == 0;
}

function isOdd(x) {
  return !isEven(x);
}

//
//

squares.forEach(function(square) {
  square.addEventListener("click", squareClicked, true);
});

// anywhere.addEventListener("click", gameOver, true);
//

function squareClicked(event) {
  alert(event.target.id);
  // alert(event.target.textContent);
}

//
//
//
//
// CHANGE PLAYER FOR NEXT TURN
// if (currentPlayer === "Player1") {
//   currentPlayer = "Player2";
// } else {
//   currentPlayer = "Player1";
// }
//end of else

// let currentPlayer = currentPlayer === "Player2" ? "Player1" : "Player2"

// // Get the modal
// var modal = document.getElementsByClassNamed("myModal");

// // Get the button that opens the modal
// var btn = document.getElementsByClassNamed("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

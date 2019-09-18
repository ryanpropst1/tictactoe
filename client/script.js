let squares = document.querySelectorAll(".square");
let tLeft = document.getElementById("one");
let tCenter = document.getElementById("two");
let tRight = document.getElementById("three");
let mLeft = document.getElementById("four");
let mCenter = document.getElementById("five");
let mRight = document.getElementById("six");
let bLeft = document.getElementById("seven");
let bCenter = document.getElementById("eight");
let bRight = document.getElementById("nine");
let winnerIs = document.getElementById("winnerCircle");
let anywhere = document.getElementById("page");

// Friend provided alternate way to refactor when I have time over weekend
// function getCellValue(id) {
//   return document.getElementById(id).textContent;
// }

// function getLineValue(array) {
//   return array.map(function(arrayItem) {
//     getCellValue(arrayItem);
//   });
// }

let gameOver = 0;
let counter = 0;
// let test = " ";

// alternate way to switch players from discussing with a friend
// let player = 'player1'

// function switchPlayer(currentPlayer) {
//   return currentPlayer === 'player1' ? 'player2': 'player1'
// }

// let playerX = true

// function switchPlayer(currentPlayer) {
//   return playerX = !currentPlayer
// }

// switchPlayer(playerX)

squares.forEach(function(square) {
  square.addEventListener("click", squareClicked, true);
});
//
//
anywhere.addEventListener("click", gameEnd, true);
//
//
function squareClicked(event) {
  if (counter % 2 == 0 && event.target.textContent !== "O") {
    event.target.textContent = "X";
    // test = event.target.textContent;
    // console.log(test);
    ++counter;
    checkForWinner();
  } else if (counter % 2 == 1 && event.target.textContent !== "X") {
    event.target.textContent = "O";
    ++counter;
    checkForWinner();
  }
}
//
//
function checkForWinner() {
  // let tRowNew = getLineValue([1,2,3])
  let tRow = tLeft.textContent + tCenter.textContent + tRight.textContent;
  // console.log(tLeft.textContent);
  let mRow = mLeft.textContent + mCenter.textContent + mRight.textContent;
  let bRow = bLeft.textContent + bCenter.textContent + bRight.textContent;
  let lColumn = tLeft.textContent + mLeft.textContent + bLeft.textContent;
  let cColumn = tCenter.textContent + mCenter.textContent + bCenter.textContent;
  let rColumn = tRight.textContent + mRight.textContent + bRight.textContent;
  let ldiag = tLeft.textContent + mCenter.textContent + bRight.textContent;
  let rdiag = tRight.textContent + mCenter.textContent + bLeft.textContent;
  var winner = [tRow, mRow, bRow, lColumn, cColumn, rColumn, ldiag, rdiag];
  for (var i = 0; i < winner.length; i++) {
    // console.log(winner[i]);
    if (gameOver == 1) {
      winnerIs.textContent += "";
      square.textContent += "";
      // console.log( " this is after gameOver has been set to 1 and entering the first if conditional"
      // );
      gameEnd();
      ++gameOver;
    } else if (winner[i] === "XXX") {
      winnerIs.textContent = "And Our winner is... X!";
      ++gameOver;
      // console.log(
      //   " this is after winner has been set to  X and gameOver increments by 1 and entering the 2nd if conditional"
      // );
      return true;
    } else if (winner[i] === "OOO") {
      winnerIs.textContent = "And Our winner is... O!";
      ++gameOver;
      return true;
    }
  }
  if (counter == 9 && winner !== true) {
    winnerIs.textContent = "Looks like we have a draw!";
    gameOver = 3;
    counter++;
  }
}

function gameEnd() {
  if (gameOver === 1) {
    location.reload();
  } else if (gameOver === 3) {
    location.reload();
  }
}

Tic Tac Toe

Objective In this exercise, finish a Tic Tac Toe game! A interactivity with JavaScript.

Requirements Write JavaScript that will interact with your HTML elements. The requirement are:

• Players can click on a cell in order to make a move.

X is always the first player. • After each move, the board is checked for a winner or a draw, ? after the 5th move??
If there is a winner or draw, show a message that announces the winner or declares a draw. • Clicking anywhere on the board when a game is over to reset the board so that a new game can be played.
Coding the Game

To code the game, you're going to have to stretch yourself especially if this is the first time you've coded anything to completion. The lecture on adding interactivity gives you all the necessary components, but now you have to problem solve in order to bring it all together. You'll need to use the document object to access your HTML elements. Use these hints to guide you: • The functions you'll need to use are: - document.querySelector and document.querySelectorAll - textContent property of the cells. - The click event passes in an object that has a target property. This is the element that was clicked! (divs) - addEventListener will let you respond to events on an element like "click".

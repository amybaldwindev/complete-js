/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Goals
// How to create fundamental game variables
// How to generate a random number
// how to manipulate the DOM
// how to read from the DOM
// How to change CSS styles


// create vars
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// set dice to random value between 1 && 6; 

// console.log(dice);

// DOM manipulation
// document.querySelector('#current-' + activePlayer).textContent = dice;


// hide initial dice
document.querySelector('.dice').style.display = 'none';

// set all values to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// Add a click event for a dice roll
document.querySelector('.btn-roll').addEventListener('click', function() {
	// 1. Random Number
	var dice = Math.floor(Math.random() * 6) + 1;
	// 2. Display result
	var diceDOM = document.querySelector('.dice')
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
	// 3. Update Round Score if rolled number  was not a 1
		if (dice !== 1) {
			// add number to current score
			roundScore += dice;
			// display the roundScore
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();

		}
	//

});

document.querySelector('.btn-hold').addEventListener('click', function() {
	// add current score to players global score
	scores[activePlayer] += roundScore;

	// Update UI 
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	// Check if player has won the game
	if (scores[activePlayer] >= 20){
		// Add player wins classes
		document.querySelector('#name-' + activePlayer).textContent = 'winner';
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.btn-roll').style.display = 'none';
		document.querySelector('.btn-hold').style.display = 'none';
	} else {
		// next player
		nextPlayer();
	}

});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
			roundScore = 0;

			document.getElementById('current-0').textContent = '0';
			document.getElementById('current-1').textContent = '0';

			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');

			// document.querySelector('.player-0-panel').classList.remove('active');
			// document.querySelector('.player-1-panel').classList.add('active');
			document.querySelector('.dice').style.display= 'none';
}
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, prevRoll;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying) {
		// 1. random number
		var dice = Math.floor(Math.random() * 6) + 1;
		var dice1= Math.floor(Math.random() * 6) + 1;
		
		// 2. display result
		document.getElementById('dice-0').src = 'dice-'+ dice +'.png';
		document.getElementById('dice-1').src = 'dice-'+ dice1 +'.png';
		// var dice1DOM =document.querySelector('.dice1')

		document.getElementById('dice-0').style.display = 'block';
		document.getElementById('dice-1').style.display = 'block';
	

		/*if (prevRoll === 6  && dice === 6) {
			scores[activePlayer] = 0;
			document.getElementById('score-'+activePlayer).textContent = 0;
			roundScore = 0;
			document.getElementById('current-'+activePlayer).textContent = 0;
			prevRoll = 0;
			nextPlayer();
		
		} else */

		if (dice !== 1 && dice1 !== 1) {
			//  add score
			roundScore += dice +dice1;
			document.querySelector('#current-' + activePlayer).textContent =  roundScore;
			prevRoll = dice;
			
		} else {
			//  next player
			// if activePlayer is 0 then activePlayer is else activePlayer is 0;
			nextPlayer();
		}
	}

});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// add the current score to the player's global score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
		var input =document.querySelector('.winning-score').value;

		if(input) {
			var winningScore = input;
		} else {
			winningScore = 100;
		}

		// Check if the player won the game.

		if (scores[activePlayer] >= winningScore) {

			document.getElementById('name-'+activePlayer).textContent = 'winner';
			document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
			document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
			gamePlaying = false;

		} else {
			nextPlayer();
		}
	}
}); 

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0; 
	prevRoll = null;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.getElementById('dice-0').style.display = 'none';
	document.getElementById('dice-1').style.display = 'none';
}

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	prevRoll = 0;
	gamePlaying = true;

	document.getElementById('dice-0').style.display = 'none';
	document.getElementById('dice-1').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// remove winning class & active class

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');


	// add active class to player 1
	document.querySelector('.player-0-panel').classList.add('active');

	// Reset Player Names
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
}

document.querySelector('.btn-new').addEventListener('click', init);
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


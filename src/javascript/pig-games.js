var scores, roundScore, activePlayer, gamePlaying;
init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var  dice =  Math.floor(Math.random() * 6) + 1;

        // 2. Display the result 
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.image = 'dice-' + dice + '.svg';
    
    
        // 3. Update the round score If the rolled number was Not a 1
        if (dice !== 1) {
        // Add number
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        /// roundScore = roundScore + dice;
        } else {
            //Next player
            nextPlayer();
        }
    }
});



document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add Current score to Global score
        scores[activePlayer] += roundScore;
        /// scores[activePlayer] = scores[activePlayer] + roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


        // check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
        // NextPlayer
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;


    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    /// document.querySelector('.player-0-panel').classList.remove('active');
    /// document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none'
}


document.querySelector('.btn-new').addEventListener('click', init) 

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none'
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


    
}







// = dice;
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + di ce + '</em>';
// var x = document.querySelector('#score-0').textContent;
// 












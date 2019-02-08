//buttons ~
const startNewGame = document.querySelector('.newgame');
startNewGame.addEventListener('click', newGame);

const holdbutton = document.querySelector('.hold');
holdbutton.addEventListener('click', holdscore);

const rolldicebutton = document.querySelector('.rolldice');
rolldicebutton.addEventListener('click', rolldice);

const usethisscore = document.getElementById('usethisscore');
usethisscore.addEventListener('click', playerScore)

//winning score
let winningScore = 100;
let playerinput = document.getElementById('playerinput');
let original100 = document.getElementById('original');

//scoreboard
let player1scorebox = document.querySelector('.p1score');
let player2scorebox = document.querySelector('.p2score');

let player1diceScore = document.querySelector('.p1dice');
let player2diceScore = document.querySelector('.p2dice');

//dice picture
const theDice = document.querySelector('.dicepicture');
const theDice2 = document.querySelector('.dicetwo');

//scores ~
let player1totalscore = 0;
let player2totalscore = 0;
let diceScore = 0;

//double six
let sixone = 0;

//players
let player = 1;

//design~
const p1design = document.querySelectorAll('.boxp1');
const p2design = document.querySelectorAll('.boxp2');


//functions ~
function rolldice(){

	let diceSecond = Math.floor(Math.random()*6+1)

	let dice = Math.floor(Math.random()*6 +1);
	theDice.style.display = 'inline-block';
	theDice.src = 'images/dice'+dice+'.png'
	theDice2.src = 'images/dice'+diceSecond+'.png'

	if(player === 1 && dice !=1 && diceSecond !=1){
		diceScore = diceScore + dice +diceSecond;
		player1diceScore.innerHTML = diceScore;
	} else if(player === 2 && dice !=1 && diceSecond !=1){
		diceScore = diceScore + dice +diceSecond;
		player2diceScore.innerHTML = diceScore;
	} else if(dice === 1 || diceSecond === 1){
		switchPlayer();
	} 

	//*************************

	if(dice === 6 || diceSecond === 6){
		sixone++;
	} else{
		sixone = 0;
	}
	if(dice === 6 && diceSecond === 6){
		switchPlayer();
	}

	if(dice === 6 && sixone === 2 || diceSecond === 6 && sixone === 2){
		if(player === 1){
			player1totalscore = 0;
			player1scorebox.innerHTML = 0;
			switchPlayer();
		} else if (player === 2){
			player2totalscore = 0;
			player2scorebox.innerHTML = 0;
			switchPlayer();
		}
	}

	//*************************

	if(player1totalscore >= winningScore){
		endGame();
		alert('player 1 wins');
	}
	if(player2totalscore >= winningScore){
		endGame();
		alert('player 2 wins');
	}
}

function switchPlayer(){
	if(player === 1){
		p1design[0].classList.remove('playerturn');
		p1design[1].classList.remove('playerturn');
		p2design[0].classList.add('playerturn');
		p2design[1].classList.add('playerturn');
		player = 2;
	} else if(player === 2){
		p2design[0].classList.remove('playerturn');
		p2design[1].classList.remove('playerturn');
		p1design[0].classList.add('playerturn');
		p1design[1].classList.add('playerturn');
		player = 1;
	}
	diceScore = 0;
	player1diceScore.innerHTML = 0;
	player2diceScore.innerHTML = 0;
	sixone = 0;
}

function newGame(){
	player1totalscore = 0;
	player2totalscore = 0;
	diceScore = 0;
	player1scorebox.innerHTML = player1totalscore;
	player2scorebox.innerHTML = player2totalscore;
	player1diceScore.innerHTML = 0;
	player2diceScore.innerHTML = 0;
	theDice.style.display = 'none';
	p2design[0].classList.remove('playerturn');
	p2design[1].classList.remove('playerturn');
	p1design[0].classList.add('playerturn');
	p1design[1].classList.add('playerturn');
	rolldicebutton.style.display = 'block';
	holdbutton.style.display = 'block';
	theDice.style.display = 'inline-block';
}

function holdscore(){
	if(player === 1){
		player1totalscore = player1totalscore + diceScore;
		player1scorebox.innerHTML = player1totalscore;
	} else if(player === 2){
		player2totalscore = player2totalscore + diceScore;
		player2scorebox.innerHTML = player2totalscore;
	}
	switchPlayer();
}
function endGame(){
	rolldicebutton.style.display = 'none';
	holdbutton.style.display = 'none';
	theDice.style.display = 'none';

	p2design[0].classList.remove('playerturn');
	p2design[1].classList.remove('playerturn');
	p1design[0].classList.remove('playerturn');
	p1design[1].classList.remove('playerturn');
}
function playerScore(){
	if(Number.isInteger(parseFloat(playerinput.value))){
		original100.style.color = 'white';
		let x = parseFloat(playerinput.value);
		winningScore = x;
		alert('This will start a new game');
		let title = document.getElementById('winningscoreinput').innerHTML = winningScore;
	} else {
		alert('That is not a number');
		document.getElementById('playerinput').value = '';
	}

}
newGame();
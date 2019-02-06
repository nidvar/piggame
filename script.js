//buttons ~
const startNewGame = document.querySelector('.newgame');
startNewGame.addEventListener('click', newGame);

const holdbutton = document.querySelector('.hold');
holdbutton.addEventListener('click', holdscore);

const rolldicebutton = document.querySelector('.rolldice');
rolldicebutton.addEventListener('click', rolldice);

//scoreboard
let player1scorebox = document.querySelector('.p1score');
let player2scorebox = document.querySelector('.p2score');

let player1diceScore = document.querySelector('.p1dice');
let player2diceScore = document.querySelector('.p2dice');

//dice picture
const theDice = document.querySelector('.dicepicture');

//scores ~
let player1totalscore = 0;
let player2totalscore = 0;
let diceScore = 0;

//players
let player = 1;

//design~
const p1design = document.querySelectorAll('.boxp1');
const p2design = document.querySelectorAll('.boxp2');

//functions ~
function rolldice(){
	let dice = Math.floor(Math.random()*6 +1);
	theDice.style.display = 'inline-block';
	theDice.src = 'images/dice'+dice+'.png'
	if(player === 1 && dice !=1){
		diceScore = diceScore + dice;
		player1diceScore.innerHTML = diceScore;
	} else if(player === 2 && dice !=1){
		diceScore = diceScore + dice;
		player2diceScore.innerHTML = diceScore;
	} else if(dice === 1){
		switchPlayer();
	}
	console.log(diceScore)
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
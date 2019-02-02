// Player score number
const p1score = document.querySelector('.p1score');
const p2score = document.querySelector('.p2score');
const p1dice = document.querySelector('.p1dice');
const p2dice = document.querySelector('.p2dice');

//Buttons
const newgame = document.querySelector('.newgame');
const rolldice = document.querySelector('.rolldice');
const hold = document.querySelector('.hold');

//dice picture
const dicepic = document.querySelector('.dicepicture');

//Player scores
let diceScore = 0;
let player1total = 0;



//functions
function startnewgame(){
	p1score.innerHTML = 0;
	p2score.innerHTML = 0;
	p1dice.innerHTML = 0;
	p2dice.innerHTML = 0;
	dicepic.style.display = 'none';
	diceScore = 0;
}
function rollthedice(){
	let dice = Math.floor(Math.random()*6 +1);
	dicepic.style.display = 'inline-block';
	dicepic.src = 'images/dice'+dice+'.png';
	diceScore = diceScore + dice;
	p1dice.innerHTML = diceScore;
}
function holdscore(){
	player1total = diceScore;
	p1score.innerHTML = player1total;
	diceScore = 0;
	p1dice.innerHTML = 0;
}



//calling functions
newgame.addEventListener('click',startnewgame);
rolldice.addEventListener('click',rollthedice);
hold.addEventListener('click',holdscore);
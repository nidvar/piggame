let score = 0;
let player = 1;
let p1score = 0;
let p2score = 0;

let winning_score = 100;

const custom_winning_score = ()=>{
	new_game();
	if(Number.isInteger(parseFloat(document.querySelector('#playerinput').value)) === true){
		winning_score = document.querySelector('#playerinput').value;
		document.querySelectorAll('.winningscore')[0].innerHTML = `First player to ${winning_score} wins`;
		document.querySelectorAll('.winningscore')[1].innerHTML = `First player to ${winning_score} wins`;
	} else {
		alert('This is not a number');
	}
	document.querySelector('#playerinput').value = '';
}

const roll_dice = ()=>{
	const dice1 = Math.floor(Math.random()*6 +1);
	const dice2 = Math.floor(Math.random()*6 +1);
	document.querySelector('.dicepicture').src = `images/dice${dice1}.png`
	document.querySelector('.dicetwo').src = `images/dice${dice2}.png`

	score = score + dice1+dice2;
	if(player === 1){
		document.querySelector('.p1dice').innerHTML = score;
	}else if(player === 2){
		document.querySelector('.p2dice').innerHTML = score;
	}

	if(dice1 === 1||dice2 === 1){
		change_player();
	}
}

const change_player = ()=>{
	score = 0;
	if(player === 1){
		document.querySelector('.p1dice').innerHTML = 0;
		player = 2
		document.querySelectorAll('.boxp2')[0].classList.add('playerturn');
		document.querySelectorAll('.boxp2')[1].classList.add('playerturn');

		document.querySelectorAll('.boxp1')[0].classList.remove('playerturn');
		document.querySelectorAll('.boxp1')[1].classList.remove('playerturn');
	}else if(player === 2){
		document.querySelector('.p2dice').innerHTML = 0;
		player = 1
		document.querySelectorAll('.boxp1')[0].classList.add('playerturn');
		document.querySelectorAll('.boxp1')[1].classList.add('playerturn');

		document.querySelectorAll('.boxp2')[0].classList.remove('playerturn');
		document.querySelectorAll('.boxp2')[1].classList.remove('playerturn');
	}
}

const hold_score = ()=>{
	if(player === 1){
		p1score = p1score + score;
		document.querySelector('.p1score').innerHTML = p1score;
	}else if(player === 2){
		p2score = p2score + score;
		document.querySelector('.p2score').innerHTML = p2score;
	}
	change_player();

	if(p1score >=winning_score){
		end_game();
	}else if(p2score >=winning_score){
		end_game();
	}
}

const end_game = ()=>{
	if(p1score >= winning_score){
		alert('player 1 wins');
	} else if (p2score >= winning_score){
		alert('player 2 wins');
	}
	document.querySelector('.rolldice').classList.add = 'hidden';
	document.querySelector('.hold').classList.add = 'hidden';
}

const new_game = ()=>{
	score = 0;
	player = 1;
	p1score = 0;
	p2score = 0;

	document.querySelector('.p1score').innerHTML = 0;
	document.querySelector('.p2score').innerHTML = 0;
	document.querySelector('.p1dice').innerHTML = 0;
	document.querySelector('.p2dice').innerHTML = 0;

	document.querySelector('.rolldice').classList.remove = 'hidden';
	document.querySelector('.hold').classList.remove = 'hidden';
}

document.querySelector('.rolldice').addEventListener('click', roll_dice);
document.querySelector('.hold').addEventListener('click', hold_score);
document.querySelector('.newgame').addEventListener('click', new_game);
document.querySelector('#usethisscore').addEventListener('click', custom_winning_score);

new_game();

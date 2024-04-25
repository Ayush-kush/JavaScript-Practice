let answer = (parseInt(Math.random() * 100 + 1));
const subt = document.querySelector('#subt');
const userGuess = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const para = document.createElement('p')

let prevGuess = []
let numGuess = 1;
let playGame = true

if(playGame){
subt.addEventListener('click',function(e){
  e.preventDefault();
  const guess = parseInt(userGuess.value);
  console.log(guess)
  validateGuess(guess);
})
}


function validateGuess(guess){
  if(guess>100 || guess<0 || isNaN(guess)){
    alert('Please Enter a valid number in between 1 to 100')
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMssg(`GAME OVER. Random Number was ${answer}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
 if(guess === answer){
   displayMssg(`You Guessed the right number`)
   endGame();
 }else if(guess<answer){
   displayMssg(`Number is high`)

 }
 else if(guess>answer){
  displayMssg(`Number is low`)
 }
}

function displayGuess(guess){
  userGuess.value=''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}

function displayMssg(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userGuess.value = ''
  userGuess.setAttribute('disabled','');
  para.classList.add('button');
  para.innerHTML = '<h2 id=newGame>Start New Game</h2>';
  resultParas.appendChild(para);
  playGame = false;
  newGame();
}

function newGame(){
 const newGameButton = document.getElementById('newGame')
 newGameButton.addEventListener('click',function(e){
  answer = (parseInt(Math.random() * 100 + 1));
   prevGuess = [];
   numGuess = 1;
   guessSlot.innerHTML = ''
   remaining.innerHTML = `${11 - numGuess}`
   userGuess.removeAttribute('disabled')
   resultParas.removeChild(para);
   playGame = true;
 })
}


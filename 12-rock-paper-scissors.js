let wins = 0;
let loses = 0;
let ties = 0;
let isAutoPlaying = false;
let intervalId;
const playgame = (playerMove) => {
    const moves = ['rock','paper','scissors'];
    computerMove = Math.floor(Math.random()*3);
    let result = '';
    if(computerMove === 0){
        computerMove = 'rock';
    }
    else if(computerMove === 1){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    if(playerMove === computerMove){
        result = 'Tie';
        ties = ties + 1;
    }
    else if((playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove ==='scissors' && computerMove === 'paper') || 
        (playerMove === 'paper' && computerMove == 'rock')
    ){
        result = 'Win';
        wins = wins + 1;
    }
    else{
        result = 'Lose';
        loses = loses + 1;
    }
    updateScore();
    document.querySelector('.result').innerHTML = `You ${result}.`;
    document.querySelector('.moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" alt="">
        <img src="images/${computerMove}-emoji.png" alt="">
        Computer`;
}
const resetScore = () => {
    wins = 0;
    loses = 0;
    ties = 0;
    updateScore();
}
const updateScore = ()=>{
    document.querySelector('.js-score').innerHTML = `Wins : ${wins} Loses : ${loses} Ties : ${ties}`;
}

const autoPlay = ()=> {
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
        let randomMove = Math.floor(Math.random()*3);
        let computerMove = '';
        if(randomMove === 0){
            computerMove = 'rock';
        }
        else if(randomMove === 1){
            computerMove = 'paper';
        }
        else if(randomMove === 2){
            computerMove = 'scissors';
        }
        playgame(computerMove);
        isAutoPlaying = true;
    },1000)

    }
    else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
}






        

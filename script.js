let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneStatus = '';
let playerTwoStatus = '';

for (let gameCounter = 1; gameCounter < 8; gameCounter++ ){

    
    let roundResult = prompt ("Did player one win: 1, or player two win: 2, or was it a draw: D?");
    console.log(`THIS IS QUESTION NUMBER ${gameCounter}`);
    console.log("----------");
    

    if (roundResult == '1'){
        playerOneScore++;
        console.log("Player one wins a point");
        console.log("");
        console.log(`Player one's score is ${playerOneScore}`);
        console.log(`Player two's score is ${playerTwoScore}`);

    } else if (roundResult == '2'){
        playerTwoScore++;
        console.log("Player two wins a point");
        console.log("");
        console.log(`Player one's score is ${playerOneScore}`);
        console.log(`Player two's score is ${playerTwoScore}`);

    } else if (roundResult == 'D'){
        console.log("Draw");
        console.log("");
        console.log(`Player one's score is ${playerOneScore}`);
        console.log(`Player two's score is ${playerTwoScore}`);

    } else {
        console.log("ERROR - RESTART!");
        break;
    }

    if (playerOneScore === 3){
        console.log("");
        console.log("Player Two is at risk (must win next point)");
        console.log("PLAYER ONE MATCH POINT");
    
        
    }
    if (playerTwoScore === 3){
        console.log("");
        console.log("Player One is at risk (must win next point)");
        console.log("PLAYER TWO MATCH POINT");
        
    }

    if (playerOneScore === 4){
        console.log("");
        console.log("PLAYER ONE WINS");
        break;
    }
    if (playerTwoScore === 4){
        console.log("");
        console.log("PLAYER TWO WINS");
        break;
    }

    let questionsRemaining = 7 - gameCounter;   
    
    if (questionsRemaining == (playerOneScore - playerTwoScore)){
        console.log("PLAYER TWO IS AT RISK: MUST WIN ALL REMAINING QUESTIONS");        
    }
    if (questionsRemaining == (playerTwoScore - playerOneScore)){
        console.log("PLAYER ONE IS AT RISK: MUST WIN ALL REMAINING QUESTIONS");        
    }

    if ((playerOneScore - playerTwoScore)>questionsRemaining){
        console.log("PLAYER ONE WINS! NOT ENOUGH QUESTIONS LEFT FOR PLAYER TWO TO CATCH UP");
        break;
    }

    if ((playerTwoScore - playerOneScore)>questionsRemaining){
        console.log("PLAYER TWO WINS! NOT ENOUGH QUESTIONS LEFT FOR PLAYER ONE TO CATCH UP");
        break;
    }


    if (gameCounter == 0){
        console.log("SUDDEN DEATH");
    }





console.log("");


}
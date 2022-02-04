// computerPlay Function:
// This function should randomly return the strings "Rock", "Paper", or "Scissors".

// 1.  Desclare a local variable that takes a random number, multiplies it by 9, and adds 1. Now you have a variable
//      that gives you a random number between 1 and 9.
// 2. Use any loop to iterate through these 9 numbers. (1 <= n > 3) returns "Rock!", (4 <= n >= 6) returns "Paper!",
//    and (7 <= n >= 9) return "Scissors!"

function computerPlay() {
  let random = Math.floor(Math.random() * 9) + 1;

  if (random <= 9 && random >= 7) return `scissors`;
  else if (random <= 6 && random >= 4) return `paper`;
	return `rock`;
}

// singleRound Function:
// This functions should play a single round of RPS, user vs computer.

// 1. It should take two parameters, playerSelection and computerSelection, so you'll have to make (global) variables for both.
//    Make playerSelection case insensitive with makeLowerCase().
// 2. The first function should take a numerical promt from the user, and the second one should take a random number
//    with computerPlay ().
// 3. It should calculate which thing wins against which.
// 4. Once the calculation is done, it should add 1 point to either or both playerPoints and computerPoints globals.
// 5. The function should return a string literal with a win-lose statement for the user.

const makeLowerCase = (string) => string.toLowerCase();  // 1. 

let playerPoints = 0;
let computerPoints = 0;

let finalResult = () => {
  if (playerPoints > computerPoints) return `You won!`;
  else if (playerPoints < computerPoints) return `You lose!`;
  return `It's a tie!`;
};

function singleRound(playerSelection, computerSelection) {
  playerSelection = makeLowerCase(playerSelection);

  if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    playerPoints++;
    return `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1,)} beats ${computerSelection}!`;
  } else if (
    (playerSelection === `rock` && computerSelection === `paper`) ||
    (playerSelection === `paper` && computerSelection === `scissors`) ||
    (playerSelection === `scissors` && computerSelection === `rock`)
  ) {
    computerPoints++;
    return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1,)} beats ${playerSelection}!`;
  } else if ( playerSelection === computerSelection) {
    playerPoints++;
    computerPoints++;
    return `It's a tie! Try again`;
  } else {
    computerPoints++;
    return `Wrong! That's not an option. Point for the computer!`
  }
}

// game Function:

// Write a NEW function called game(). Use the previous function inside of this one to 
// play a 5 round game that keeps score and reports a winner or loser at the end.
// A functions that calls round(playerSelection, computerSelection) 5 times and returns the winner of the game!

// 1. Create a game() function that takes no parameter.
// 2. Create a constant to store 5, a result variable to store playRound(), and an array variable to store each round's result.
// 3. Inside it, create a loop that starts at 0 and goes up to 5 (not included).
// 4. Inside the loop, create the playerSelection and computerSelection variables, run the playRound() function inside result, 
//    push result into the array.
// 5. Make a point counter function that resturn a win statement (e.g. "You win!" / "You lose") and print it out to the console.

function playGame() {
  const NUMBER_OF_ROUNDS = 5;
  let result;
  let array = [];

  for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt(`What's your pick?`);

    result = singleRound(playerSelection, computerSelection);
    array.push(result);
    
    console.log(array.slice(-1));
  }
  return console.log(`${finalResult()} You got ${playerPoints} points against the cumputer's ${computerPoints} points.`);
}

playGame();
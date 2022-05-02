// Global Scopes to hold the wins, ties, and losses 
let wins = 0;
let ties = 0;
let losses = 0;

// An array of options for the user to choose from 
let options = ['R', 'P', 'S'];

let playGame = function() {
  // displays a prompt telling the user to enter one of the following characters 
  let userChoice = window.prompt('Enter R, P, or S:');

  // Ends function if canceled 
  if (!userChoice) {
    return;
  }

  // Make the userChoice input automatically uppercase 
  userChoice = userChoice.toUpperCase();

  // Allows for a random number to be valued in the variable 'index' 
  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];

  window.alert(`The computer chose ${computerChoice}`);

  // If both hands are the same, then it is a tie 
  if (userChoice === computerChoice) {
    ties++;
    window.alert(`It's a Tie!`);

    // If the user inputs the winning value a counter will be added to 'wins' and an alert will notify the user they have won 
  } else if (
    (userChoice === 'R' && computerChoice === 'S') ||
    (userChoice === 'P' && computerChoice === 'R') ||
    (userChoice === 'S' && computerChoice === 'P')
  ) {
    wins++;
    window.alert('You Win!');

    // Anything that was not a wins, will be considered a loss and the loss counter will be added as well as an alert notifying the user has loss 
  } else {
    losses++;
    window.alert('You Lost!');
  }

// Following the order, after the decision has been made between user and computer, an alert will display the added/tallied score 
  window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

// a variable of playAgain has been added with a window confirm method 
  let playAgain = window.confirm('Play Again?');

//  the if statements prompts the window confirm to display and if it is confirmed, the playAgain function will run  
  if (playAgain) {
    playGame();
  }
};

// This will call the game to start and display everything within lines 10-57 
playGame();

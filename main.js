function playGame(playerChoice) {
  let x=["rock","paper","scissors"]
  let computerChoice = x[Math.floor(Math.random() * 3)];
  if (playerChoice ==computerChoice) {
    document.getElementById("t").innerHTML = "It's a tie!";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    document.getElementById("t").innerHTML = "You win!";
  } else {
    document.getElementById("t").innerHTML = "Computer wins!";
  }
}
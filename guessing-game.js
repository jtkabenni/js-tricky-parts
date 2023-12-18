function guessingGame() {
  //create random number
  const randNum = Math.floor(Math.random() * 100);
  let isOver = false;
  let count = 0;
  //
  return function guess(num) {
    if (isOver) {
      return "The game is over, you already won!";
    }
    if (num === randNum) {
      isOver = true;
      count++;
      const freq = count > 1 ? "guesses" : "guess";
      return `You win! You found ${num} in ${count} ${freq}.`;
    } else if (num > randNum) {
      count++;
      return `${num} is too high!`;
    } else {
      count++;
      return `${num} is too low!`;
    }
  };
}

module.exports = { guessingGame };

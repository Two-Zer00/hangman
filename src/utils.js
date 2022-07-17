const word = ["blue", "red", "green", "yellow"];
export function getWord() {
  return word[getRandomInt(word.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

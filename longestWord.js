//8.Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
// string. If there are several words which are the longest ones, print the last word(words can be separated
// by space, comma or hyphen).
// function longer(champ, cont) {
//   return cont.length > champ.length ? cont : champ;
// }

// function longestWord(str) {
//   let words = str.split(" ");
//   return words.reduce(longer);
// }
// longestWord("A revolution without dancing is a revolution not worth having.");
function longestWord(str) {
  let longest = str.split(" ").sort((a, b) => a.length - b.length);
  console.log(longest[longest.length - 1]);
}
longestWord("A revolution without dancing is a revolution not worth having.");

// 7. Write a function to compute a new string from the given one by moving the first charto come afterthe
// next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
// any group of fewerthan 3 chars at the end.

function moveFirstChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 3) {
    if (str[i + 2]) {
      newStr += str[i + 1] + str[i + 2] + str[i];
    } else {
      newStr += str[i] + (str[i + 1] || "");
    }
  }
  console.log(newStr);
}
moveFirstChar("aweyoolp");

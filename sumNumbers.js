//5.Write a function, which receives a string, finds possible largest numbers in the string and returns their
// sum.

// let sumNumbers = function (str) {
//   let result = 0;
//   let numberStr = "";

//   for (let i = 0; i < str.length; i++) {
//     let strItem = str[i];
//     if (strItem >= "0" && strItem <= "9") {
//       numberStr += strItem;
//       if (i == str.length - 1) {
//         result += Number.parseInt(numberStr);
//       }
//     } else if (numberStr != "") {
//       result += Number.parseInt(numberStr);
//       numberStr = "";
//     }
//   }
//   console.log(result);
// };
// sumNumbers("aaa50kkk60hh9");
function largestNumbersSum(str) {
  matches = str.match(/x?-?[0-9]\d+/g);
  result = 0;
  for (let elem of matches) {
    result += parseInt(elem);
  }
  console.log(result);
}
largestNumbersSum("dfsdf-12njn700");

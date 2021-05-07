//2.Write a function that calculates sum, difference, multiplication and division between given array elements
// depending on passed operation symbol. Write appropriate function for each operation.

function calculate(arr, symbol) {
  switch (symbol) {
    case "+":
      let sum = arr.reduce((a, b) => a + b);
      console.log(sum);
      break;
    case "-":
      let difference = arr.reduce((a, b) => a - b);
      console.log(difference);
      break;
    case "/":
      let division = arr.reduce((a, b) => a / b);
      console.log(division);
      break;
    case "*":
      let multiplication = arr.reduce((a, b) => a * b);
      console.log(multiplication);
      break;
    default:
      console.log("Put symbol");
  }
}
calculate([4, 2, 1], "+");

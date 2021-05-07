//1.Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
function oddEven(numArr) {
  let odd = numArr.filter((number) => number % 2 === 1);
  let even = numArr.filter((number) => number % 2 === 0);
  console.log(odd);
  console.log(even);
}

oddEven([45, 12, 3, 6, 17, 0]);
oddEven([1, 3, 5, 9]);

//9.Write a function which receives an array and a number as arguments and returns a new array from the
// elements of the given array which are larger than the given number.

function findLarger(arr, elem) {
  let newArr = arr.filter((item) => {
    return item > elem;
  });
  if (newArr.length !== 0) {
    console.log(newArr);
  } else {
    console.log("Such values do not exist");
  }
}
findLarger([10, 25, 16, -5, 30, 15, 24], 16);
findLarger([1, 1, -2, 3], 9);

function biggestNegNumProduct(arr) {
  let negative = [];

  for (group of arr) {
    if (Array.isArray(group)) {
      let negativeArray = [];

      for (item of group) {
        if (item < 0) {
          negativeArray.push(item);
        }
      }
      negative.push(negativeArray);
      negative = negative.filter((item) => item.length > 0);
    }
  }

  let newArray = [];
  negative.map((group, i) => {
    maxValue = Math.max(...group);

    newArray.push(maxValue);
  });

  return newArray.reduce((a, b) => a * b);
}

console.log(
  biggestNegNumProduct([
    [1, 2, 3, 4, -8, -1],
    [-5, 1, 8],
  ])
);

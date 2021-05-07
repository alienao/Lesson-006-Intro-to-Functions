//11
function findEvenDigBtwNum(min, max) {
  let numbers = "";

  forItems: for (let i = min; i <= max; i++) {
    for (let j = 0; j < `${i}`.length; j++) {
      if (`${i}`[j] % 2 !== 0) {
        continue forItems;
      }
    }
    numbers += `${i},`;
  }
  return numbers.length > 0 ? numbers : "Such numbers does not exist.";
}
console.log(findEvenDigBtwNum(19, 42));
console.log(findEvenDigBtwNum(99, 199));
//test

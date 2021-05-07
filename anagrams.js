function select(str, arr) {
  let array = [];
  for (let item of arr) {
    let counter = 0;
    if (item.length === str.length) {
      for (let i = 0; i < item.length; i++) {
        if (item.includes(str[i])) {
          counter++;
          if (counter === item.length) array.push(item);
        }
      }
    }
  }
  return array;
}
console.log(
  select("pencil", ["licnep", "circular", "pupil", "nilcpep", "leppnec"])
);

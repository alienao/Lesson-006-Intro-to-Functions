// 16. Given an object. Invert it (keys become values and values become keys). If there is more than key forthat
// given value create an array.

function invertKeysValues(obj) {
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let result = {};
  values.forEach((value, index) => {
    if (!result.hasOwnProperty(value)) {
      result[value] = keys[index];
    } else {
      let temp = [];
      temp.push(result[value]);
      temp.push(keys[index]);
      result[value] = temp;
    }
  });

  console.log(result);
  return result;
}

invertKeysValues({ a: "1", b: "2", c: "2" });

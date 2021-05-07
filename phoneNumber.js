function phoneNumber(num) {
  num = num.split(" ").join("");

  if (num[0] === "+" && num.length === 11 && !isNaN(num)) {
    return num.substring(1, num.length);
  } else if (!isNaN(num) && num.length === 10 && num[0] !== "+") {
    return num;
  }
  return "bad code";
}
console.log(phoneNumber("123+2356897452"));

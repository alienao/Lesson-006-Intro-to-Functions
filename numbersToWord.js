//12.Write a function, which willreceive a number between 0 to 999,999 and spell out that numberin English.
let one = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen ",
];

let ten = [
  "",
  "",
  "twenty ",
  "thirty ",
  "forty ",
  "fifty ",
  "sixty ",
  "seventy ",
  "eighty ",
  "ninety ",
];

function numToWords(n, s) {
  let str = "";
  if (n > 19) {
    str += ten[parseInt(n / 10)] + one[n % 10];
  } else {
    str += one[n];
  }
  if (n != 0) {
    str += s;
  }
  return str;
}

function convertToWords(n) {
  let out = "";
  out += numToWords(parseInt(n / 10000000), "crore ");
  out += numToWords(parseInt((n / 100000) % 100), "lakh ");
  out += numToWords(parseInt((n / 1000) % 100), "thousand ");
  out += numToWords(parseInt((n / 100) % 10), "hundred ");

  if (n > 100 && n % 100 > 0) {
    out += "and ";
  }
  out += numToWords(parseInt(n % 100), "");
  return out;
}
console.log(convertToWords(989889));

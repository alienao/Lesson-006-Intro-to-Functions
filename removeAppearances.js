// 6.Write a function which receives two strings and removes appearances of the second string from the first
// one.

function removeAppearance(sent, elem) {
  let newSent = sent.split(" ");
  let newArr = [];
  for (let i of newSent) {
    if (i.includes(elem)) {
      newArr.push(i.slice(0, i.indexOf(elem)));
    } else {
      newArr.push(i);
    }
  }
  console.log(newArr.join(" "));
}
removeAppearance("This is some text.", "is");

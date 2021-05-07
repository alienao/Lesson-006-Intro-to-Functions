// 17.Given two objects. Write a function that performs shallow compare.

let shallowCompare = (obj1, obj2) =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
shallowCompare({ a: "1" }, { a: "1" });

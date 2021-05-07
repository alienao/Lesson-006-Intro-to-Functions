// 16.Given the list of the following readers:Output the books sorted by the percent in descending order which readStatus is true.

let items = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

items
  .filter((item) => item.readStatus === true)
  .sort(function (a, b) {
    return b.percent - a.percent;
  });

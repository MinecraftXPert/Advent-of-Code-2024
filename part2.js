const fs = require("fs");

const text = fs.readFileSync("input1.txt").toString("utf-8");

let arrayText = text.split("\r\n");

let array = [];

arrayText.forEach((text) => {
  var newText = text.split("   ");
  array.push(newText);
});

let list1 = array.map((x) => x[0]);
let list2 = array.map((y) => y[1]);

list1 = list1.map((num) => {
  return parseInt(num);
});

list2 = list2.map((num) => {
  return parseInt(num);
});

let numSimilar = 0;

for (let i = 0; i < list2.length; i++) {
  for (j = 0; j < list1.length; j++) {
    if (list1[j] === list2[i]) {
      numSimilar += list2[i];
    }
  }
}
console.log(numSimilar);
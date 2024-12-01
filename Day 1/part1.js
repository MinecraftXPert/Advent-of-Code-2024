const fs = require("fs");

const text = fs.readFileSync("Day1/input1.txt").toString("utf-8");

let arrayText = text.split("\r\n");

let array = [];

arrayText.forEach((text) => {
  var newText = text.split("   ");
  array.push(newText);
});

let list1 = array.map((x) => x[0]);
let list2 = array.map((y) => y[1]);

list1 = list1
  .sort((a, b) => a - b)
  .map((num) => {
    return parseInt(num);
  });

list2 = list2
  .sort((a, b) => a - b)
  .map((num) => {
    return parseInt(num);
  });

let sum = 0;
for (let i = 0; i < list1.length; i++) {
  sum = sum + Math.abs(list1[i] - list2[i]);
}

console.log(sum);

// sum = sum + (Math.abs(list1[0] - list2[0]));
// console.log(sum);
// sum = sum + (Math.abs(list1[1] - list2[1]));
// console.log(sum);

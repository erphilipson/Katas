let firstNum = 0;
let secondNum = 1;
let transitionalNum = 0;
let sum = 0;

while (firstNum < 4000000) {
  transitionalNum = firstNum + secondNum;
  secondNum = firstNum;
  firstNum = transitionalNum;

  if (firstNum % 2 == 0) {
    sum = sum + firstNum;
  }
}

console.log (sum);

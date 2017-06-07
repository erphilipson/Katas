let x = 0;
let y = 1;
let z = 0;
let sum = 0;

while (x < 4000000) {
  z = x + y;
  y = x;
  x = z;

  if (x % 2 == 0) {
    sum = sum + x;
  }
}

console.log (sum);

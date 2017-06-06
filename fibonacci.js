let x = 0;
let y = 1;
let z = 0;
let sum = 0;

for (i = 0; i < 45; i++) {
  z = x + y;
  y = x;
  x = z;

  if (x <= 4000000 && x % 2 == 0) {
    sum = sum + x;
  }
}

console.log (sum);

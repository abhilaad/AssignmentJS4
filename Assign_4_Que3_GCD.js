// 3. Write a JavaScript program to compute the greatest common divisor
// (GCD) of two positive integers.

function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd(12, 13));
console.log(gcd(9, 3));
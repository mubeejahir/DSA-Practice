//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

var reverse = function(num) {
  let res = 0;

  while (num !== 0) {
    let rem = num % 10;
    res = (res * 10) + rem;
    num = (num-rem)/10;
  }
  if (res < -2147483648 || res > 2147483647) {
    return 0;
  }
  return res;
}

console.log(reverse(1534236469));
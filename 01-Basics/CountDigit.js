//Count the Digits That Divide a Number
//1248 => 1248% 1 2 4 8  => 4 or 121% 1 2 => 2
var countDigits = function(num) {
let temp = num;
let val = 0;

let check = num.toString().includes(0);
if(check) {
  console.log("contains Zero")
 }else{
while (temp > 0){
  let digit = temp % 10;
  let res = num % digit;
// console.log("res", res)
  if(res == 0){
    val++;
  }
  temp = (temp - digit)/ 10;
}
}
return val
}

let output = countDigits(1248);
console.log(output)
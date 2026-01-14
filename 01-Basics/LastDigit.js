//Find Last Digit Of a^b for Large Numbers

function lastDigit(a,b){
    while(b>0){
        let res = 1;
    res = a * res;
    b--
}
console.log(res);
let temp;
temp = res % 10 ;
return temp;
}

lastDigit(5,4);
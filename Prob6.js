const bigNumber = 2n ** 1000n;
const numString = bigNumber.toString();
const sumOfDigits= numString
.split('')
.reduce((sum,digit)=>sum+parseInt(digit),0);
console.log(`The sum of digit of 2^1000 is: ${sumOfDigits}`); 
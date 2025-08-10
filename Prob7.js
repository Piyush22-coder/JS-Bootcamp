let a = 1n, b = 1n;
let index = 2;

while (b.toString().length < 1000) {
    let temp = a + b;
    a = b;
    b = temp;
    index++;
}

console.log("Position of first 1000-digit Fibonacci number:", index);

let arr = [];
for (let i = 0; i <= 100; i++) {
  arr.push(i);
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 3;
  if (arr[i] % 5 === 0) {
    sum = sum + arr[i];
  }
}
console.log(sum);

const users=[
    {name:'Alice',age:25},
    {name:'BOb',age:30},
    {name:'Charlie',age:25}
];
total = users.map(x=> x.age).reduce((a,x)=>a+x)
console.log(`Avg: ${total/users.length}`)
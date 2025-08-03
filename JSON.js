const myObject={
    "name":"Alice",
    "age":25,
    "isStudent":true,
    "hobbies":["Reading","coding"],
    "address":{
        "city":"New York",
        "zipcode":"10001"
    }
}
console.log(`Name:${myObject.name}`);
console.log(`Age:${myObject.age}`);
console.log(`IsStudent:${myObject.isStudent}`);
console.log(`Hobbies:${myObject.hobbies}`);
console.log(`Address:${myObject.address.city}`);
console.log(`Address:${myObject.address.zipcode}`);
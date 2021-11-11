const obj1 = { a: true };
const obj2 = obj1;

obj1.a = "hello";
delete obj1

// console.log("1", obj1);
console.log("2", obj2);

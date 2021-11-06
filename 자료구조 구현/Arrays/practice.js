const strings = ["five", "four", "c", "d"];
// 4*4 = 16 bytes of storage

// push
strings.push("e"); // O(1)

// pop
strings.pop();
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

// slice
const value = strings.slice(2, 4);
console.log(value);

console.log(strings);

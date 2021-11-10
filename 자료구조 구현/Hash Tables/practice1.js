let user = {
  age: 54,
  name: "Billy",
  magic: true,
  scream: function () {
    console.log("Hi");
  },
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

console.log(user);

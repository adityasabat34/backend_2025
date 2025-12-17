// const user = {
//   name: "Aditya",
//   age: 22,
//   lastName: "Sabat",
//   getFullName: function () {
//     return this.name + " " + this.lastName;
//   },

//   getUserAge: function () {
//     return new Date().getFullYear() - user.age;
//     // console.log(this.age);
//   },
// };

// console.log(user.getFullName());
// console.log(user.getUserAge());

function createUser(firstName, lastName, age) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  return user;
}

const user1 = createUser("Aditya", "Sabat", 22);
const user2 = createUser("John", "Doe", 30);
console.log(user1);
console.log(user2);

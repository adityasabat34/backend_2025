const user = {
  name: "Aditya",
  age: 22,
  lastName: "Sabat",
  getFullName: function () {
    return this.name + " " + this.lastName;
  },

  getUserAge: function () {
    return new Date().getFullYear() - user.age;
    // console.log(this.age);
  },
};

console.log(user.getFullName());
console.log(user.getUserAge());

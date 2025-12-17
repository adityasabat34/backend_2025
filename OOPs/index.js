function getUserAge() {
  return new Date().getFullYear() - this.age;
}

function createUser(firstName, lastName, age) {
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    getUserAge,
  };

  return user;
}

const user1 = createUser("Aditya", "Sabat", 22);
const user2 = createUser("John", "Doe", 30);
console.log(user1);
console.log(user2);

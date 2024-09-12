const greetings = function (name) {
  return `Hi, ${name}`;
};

console.log(greetings("Goku"));

const greetings2 = (name) => {
  return `Hi, ${name}`;
};

console.log(greetings2("Vegeta"));

const greetings3 = (name) => `Hi, ${name}`;

console.log(greetings3("Piccolo"));

// Implicit return
const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());

const getActiveUser = (name) => ({
  uid: "ABC456",
  username: name,
});

const activeUser = getActiveUser("Carl");
console.log(activeUser);

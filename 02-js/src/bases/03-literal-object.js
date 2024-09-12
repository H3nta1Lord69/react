const person = {
  name: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    city: "New York",
    zip: 525636523,
    lat: 78932178.823,
    lng: 89127398173,
  },
};

console.log(person);
console.table({ person });

const person2 = person;
person2.name = 'Peter'

console.log(person);
console.log(person2);
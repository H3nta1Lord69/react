// Destructuring assignment
const person = {
  name: "Tony Stark",
  age: 45,
  codeName: "Iron Man",
  range: "Admiral",
};

const { age, name, codeName } = person;

console.log(name);
console.log(age);
console.log(codeName);

const returnPerson = ({ name, range = "Captain" }) => {
  console.log(name, range);
};

returnPerson(person);

const useContext = ({ codeName, age }) => {
  return {
    code: codeName,
    dudeAge: age,
    latlng: {
      lat: 13.12412412,
      lng: -0.323232,
    },
  };
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const { code, dudeAge, latlng:{lat,lng} } = useContext(person);

console.log(code, dudeAge);
console.log(lat, lng)

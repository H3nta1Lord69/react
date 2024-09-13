// Destructuring array assignment

const characters = ["Goku", "Vegeta", "Piccolo", "Gohan"];

const [, , p3] = characters;
console.log(p3);

const returnArray = () => {
  return ["ABC", 123];
};

const [arrLetters, arrNums] = returnArray();
console.log(arrLetters, arrNums);

const useState = (value) => {
  return [
    value,
    () => {
      console.log("Hi!");
    },
  ];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [ name, setName ] = useState("Goku");

console.log(name);
setName();

const name = "Carl";
const lastName = "Rivero";

const completeName = `${name} ${lastName}`;

console.log(completeName);

function getSaludo(name) {
  return 'Hola ' + name;
}

console.log(`This is a text: ${getSaludo(name)}`)
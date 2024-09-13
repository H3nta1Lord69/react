// import { heroes } from "./data/heroes";
import heroes, { owners } from "../data/heroes";

// const getHeroById = (id) => {
//   return heroes.find((heroe) => {
//     if(heroe.id === id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroById(2));

const getHeroByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner.toLowerCase() === owner.toLowerCase());

console.log(getHeroByOwner("mArVel"));
console.log(owners);

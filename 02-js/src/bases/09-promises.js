import { getHeroById } from "./bases/08-imp-exp";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroById(2);
//     // console.log(`2 sec`);
//     // console.log(heroe);
//     resolve(heroe);
//     // reject(`There's no such a heroe`);
//   }, 2000);
// });

// promise
//   .then((heroe) => {
//     console.log("Then heroe: ", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`There's no such a heroe`);
      }
    }, 2000);
  });
};

getHeroByIdAsync(2)
  .then(console.log)
  .catch(console.warn);

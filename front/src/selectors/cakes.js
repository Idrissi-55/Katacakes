// export function findCake(cakes, _id) {
//   const cake = cakes.find((testedCake) => {
//     // Puisque je récupère l'id via une url  -> string
//     // alors que dans ma liste j'ai un number
//     // Donc je dois faire une comparaison "non stricte"
//     // afin de  trouver l'élément (j'aurais aussi pu convertir la string en number)
//     return testedCake._id == _id;
//   });
//   return cake;
// }

export const findCake = (cakes, _id) => cakes.find((cake) => cake._id == _id);



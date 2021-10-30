// export function findCake(cakes, id) {
//   const cake = cakes.find((testedCake) => {
//     // Puisque je récupère l'id via une url  -> string
//     // alors que dans ma liste j'ai un number
//     // Donc je dois faire une comparaison "non stricte"
//     // afin de  trouver l'élément (j'aurais aussi pu convertir la string en number)
//     return testedCake.id == id;
//   });
//   return cake;
// }

export const findCake = (list = [], _id=1) => list.find((elem) => elem._id == _id);

export function findCake(cakes, searchedName) {
  const cake = cakes.find((testedName) => {
    return testedName.name === searchedName;
  });
  return cake;
}

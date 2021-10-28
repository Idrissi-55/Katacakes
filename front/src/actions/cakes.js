export const FETCH_CAKES = 'FETCH_CAKES';
export const FETCH_CAKES_SUCCESS = 'FETCH_CAKES_SUCCESS';

export const fetchCakes = () => ({
  type: FETCH_CAKES,
})

export const fetchCakesSuccess = (cakes) => ({
  type: FETCH_CAKES_SUCCESS,
  cakes,
})

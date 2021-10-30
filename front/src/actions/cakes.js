export const FETCH_CAKES = 'FETCH_CAKES';
export const FETCH_CAKES_SUCCESS = 'FETCH_CAKES_SUCCESS';
export const FETCH_CAKE = 'FETCH_CAKE';
export const FETCH_CAKE_SUCCESS = 'FETCH_CAKE_SUCCESS'

export const fetchCakes = () => ({
  type: FETCH_CAKES,
})

export const fetchCakesSuccess = (cakes) => ({
  type: FETCH_CAKES_SUCCESS,
  cakes,
})

export const fetchCake = (idCake) => ({
  type: FETCH_CAKE,
  idCake
})
export const fetchCakeSuccess = (data) => ({
  type: FETCH_CAKE,
  data
})

export const FETCH_ALL_CAKES = 'FETCH_ALL_CAKES';
export const FETCH_ALL_CAKES_SUCCESS = 'FETCH_ALL_CAKES_SUCCESS';
export const FETCH_CAKE = 'FETCH_CAKE';
export const FETCH_CAKE_SUCCESS = 'FETCH_CAKE_SUCCESS';
export const SAVE_ID = 'SAVE_ID';

export const fetchAllCakes = () => ({
  type: FETCH_ALL_CAKES,
})

export const fetchAllCakesSuccess = (cakes) => ({
  type: FETCH_ALL_CAKES_SUCCESS,
  cakes,
})

export const fetchCake = (idCake) => ({
  type: FETCH_CAKE,
  idCake
})
export const fetchCakeSuccess = (data) => ({
  type: FETCH_CAKE_SUCCESS,
  data
})

export const saveID = (idCake) => ({
  type: SAVE_ID,
  idCake,
})

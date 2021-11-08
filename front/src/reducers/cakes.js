// import data from 'src/data';
import { FETCH_ALL_CAKES, FETCH_ALL_CAKES_SUCCESS, FETCH_CAKE_SUCCESS, SAVE_ID } from "../actions/cakes";

export const initialState = {
  list: [],
}

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CAKES: {
      return {
        ...currentState,
      }
    }
    
    case FETCH_ALL_CAKES_SUCCESS: {
      return {
        ...currentState,
        list: action.cakes,
      }
    }
    default:
      return currentState;
  }
}

export default reducer;

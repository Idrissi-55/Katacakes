// import data from 'src/data';
import { FETCH_CAKES, FETCH_CAKES_SUCCESS } from "../actions/cakes";

export const initialState = {
  list: [],
  idCake: null,
}

const reducer = (currentState = initialState, action= {}) => {
  switch (action.type) {
    case FETCH_CAKES: {
      return {
        ...currentState,
      }
    }
    case FETCH_CAKES_SUCCESS: {
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

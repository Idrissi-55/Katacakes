// import data from 'src/data';
import { FETCH_CAKES } from "../actions/cakes";

export const initialState = {
  list: [],
}

const reducer = (currentState = initialState, action= {}) => {
  switch (action.type) {
    case FETCH_CAKES: {
      return {
        ...currentState,
      }
    }
    default:
      return currentState;
  }
}

export default reducer;

// import data from 'src/data';
import { FETCH_ALL_CAKES, FETCH_ALL_CAKES_SUCCESS, FETCH_CAKE_SUCCESS, SAVE_ID } from "../actions/cakes";

export const initialState = {
  list: [],
  idCake: 'lol',
  name: '',
  thumbnail: '',
  season: '',
  description: ''
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
    
    case FETCH_CAKE_SUCCESS:
      return {
        name: action.cake.name,
        thumbnail: action.cake.thumbnail,
        season: action.cake.season,
        description: action.cake.description,
        idCake: action.cake.idCake
      }
    case SAVE_ID:
      return {
        idCake: action.idCake,
      }
    default:
      return currentState;
  }
}

export default reducer;

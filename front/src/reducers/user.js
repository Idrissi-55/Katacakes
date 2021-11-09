// import actions
import { LOGIN, LOGIN_SUCCESS, LOGIN_INPUT_CHANGE } from "../actions/user";

// initialState
export const initialState = {
  auth: {
    email: 'test@test.fr',
    password: '12345',
  },
  loggedMessage: '',
  isLogged: false,
};

const reducer = (currentState = initialState, action={}) => {
  switch (action.type) {
    
    case LOGIN: 
      return {
        ...currentState
      };

    case LOGIN_SUCCESS:
      return {
        ...currentState,
        auth: {
          email: '',
          password: '',
        },
        isLogged: true,
        loggedMessage: 'Bonjour'
      };

    case LOGIN_INPUT_CHANGE:
      return {
        ...currentState,
        auth: {
          ...currentState.auth,
          [action.name]: action.text,
        }
      }; 

    //default  
    default:
      return currentState;
  }
}

export default reducer;

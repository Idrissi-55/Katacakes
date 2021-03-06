// import actions
import { LOGIN, LOGIN_SUCCESS, LOGIN_INPUT_CHANGE, LOGOUT } from "../actions/user";

// initialState
export const initialState = {
  auth: {
    email: 'test@test.com',
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
        loggedMessage: `Bonjour ${action.user.pseudo}`
      };

    case LOGIN_INPUT_CHANGE:
      return {
        ...currentState,
        auth: {
          ...currentState.auth,
          [action.name]: action.text,
        }
      }; 
    
    case LOGOUT:
      return {
        ...currentState,
          isLogged: false,
          loggedMessage: '',
      }
    //default  
    default:
      return currentState;
  }
}

export default reducer;

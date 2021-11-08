// initialState
export const initialState = {
  auth: {
    email: '',
    password: '',
  },
  loggedMessage: '',
  isLogged: false
}

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    default:
      return currentState;
  }
}

export default reducer;

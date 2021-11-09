export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';

export const LOGOUT = 'LOGOUT';

// login actions
export const login = () => ({
  type: LOGIN,
})

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
})

export const loginError = () => ({
  type: LOGIN_ERROR
})

// login input actions
export const loginInputChange = (text, name) => ({
  type: LOGIN_INPUT_CHANGE,
  text,
  name,
})

// logout action
export const logout =() => ({
  type: LOGOUT
})

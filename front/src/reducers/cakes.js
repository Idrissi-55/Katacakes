import data from 'src/data';

export const initialState = {
  list: data,
}

const reducer = (currentState = initialState, action= {}) => {
  switch (action.type) {
    default:
      return currentState;
  }
}

export default reducer;

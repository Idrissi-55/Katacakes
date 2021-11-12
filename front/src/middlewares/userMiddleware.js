import axios from 'axios';
import {LOGIN, loginSuccess} from 'src/actions/user'
// Back server
const URL = "http://localhost:5000/api";
const HEROKU_URL = "https://katascakes.herokuapp.com/api"


export default(store) => (next) => (action) => {
  switch(action.type) {
    
    case LOGIN:
    next(action);
    const {auth} = store.getState().user;
    axios({
      method: 'post',
      url: `${URL}/login`,
      data: auth,
    })
    .then((res) => {
      const user=res.data
      store.dispatch(loginSuccess(user));
    })
    .catch((err) => {
      console.log("impossible de se connecter", err);
    })
    break;

    default:
      next(action);
  }
}

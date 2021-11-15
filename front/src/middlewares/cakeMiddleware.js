import axios from 'axios';
import { fetchAllCakes, fetchAllCakesSuccess, FETCH_ALL_CAKES, FETCH_CAKE, feftchCakeSuccess, fetchCakeSuccess } from '../actions/cakes';


//URL
const URL = "http://localhost:5000/api";
const HEROKU_URL = "https://katascakes.herokuapp.com/api"

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_CAKES: 
      next(action);
      console.log("je cherche les cakes");
      axios({
        method: 'get',
        url: `${HEROKU_URL}/cakes`,
      })
      .then((res) => {
        console.log("je reçois ça", res.data);
        store.dispatch(fetchAllCakesSuccess(res.data));
      })
      .catch((err) => {
        console.log("une erreur s'est produite")
      })
    break;

  
    default:
      next(action);
  }
}

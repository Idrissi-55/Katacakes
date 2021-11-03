import axios from 'axios';
import { saveID,fetchAllCakes, fetchAllCakesSuccess, FETCH_ALL_CAKES, FETCH_CAKE, feftchCakeSuccess, fetchCakeSuccess } from '../actions/cakes';

//URL
const URL = "http://localhost:5000/api";

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ALL_CAKES: {
      next(action);
      console.log("je cherche les cakes");
      axios({
        method: 'get',
        url: `${URL}/cakes`,
      })
      .then((res) => {
        console.log("je reçois ça", res.data);
        store.dispatch(fetchAllCakesSuccess(res.data));
      })
      .catch((err) => {
        console.log("une erreur s'est produite")
      })
      break;
    }

  case FETCH_CAKE: {
    next(action);
    const {cake} = store.getState();
    axios({
      method: 'get',
      url: `${URL}/cakes/${cake.idCake}`,
    })
    .then((res) => {
      console.log(`je fetch une cake : ${res.data}`);
      store.dispatch(fetchCakeSuccess(res.data))
    })
    .catch((err) => {
      console.log("une erreur s'est produite");
    })
    break;
  }
    default:
      next(action);
  }
}

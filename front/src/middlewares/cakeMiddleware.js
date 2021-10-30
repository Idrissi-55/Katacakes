import axios from 'axios';
import { fetchCakes, fetchCakesSuccess, FETCH_CAKES, FETCH_CAKE, fetchCakeSuccess } from '../actions/cakes';

//URL
const URL = "http://localhost:5000/api";

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CAKES: {
      next(action);
      console.log("je cherche les cakes");
      axios({
        method: 'get',
        url: `${URL}/cakes`,
      })
      .then((res) => {
        console.log("je reçois ça", res.data);
        store.dispatch(fetchCakesSuccess(res.data));
      })
      .catch((err) => {
        console.log("une erreur s'est produite")
      })
    }

  // case FETCH_CAKE: {
  //   const {cake} = store.getState();
  //   axios({
  //     method: 'get',
  //     url: `${URL}/cake/${cake._id}`,
  //   })
  //   .then((res) => {
  //     console.log(`je fetch une cake : ${res.data}`);
  //     store.dispatch(fetchCakeSuccess(res.data))
  //   })
  //   .catch((err) => {
  //     console.log("une erreur s'est produite");
  //   })
  // }
    break;
    default:
      next(action);
  }
}

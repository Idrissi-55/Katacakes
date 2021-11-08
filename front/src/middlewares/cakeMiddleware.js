import axios from 'axios';
import { fetchAllCakes, fetchAllCakesSuccess, FETCH_ALL_CAKES, FETCH_CAKE, feftchCakeSuccess, fetchCakeSuccess } from '../actions/cakes';
import history from '../history';

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
      // .then(() => {
      //   history.push(`/cakes/:_id`);
      // })
      .catch((err) => {
        console.log("une erreur s'est produite")
      })
    }
    break;

  // case FETCH_CAKE: {
  //   next(action);
  //   const {cake} = store.getState();
  //   axios({
  //     method: 'get',
  //     url: `${URL}/cakes/${cake._id}`,
  //   })
  //   .then((res) => {
  //     console.log(`je fetch une cake : ${res.data}`);
  //     store.dispatch(fetchCakeSuccess(res.data))
  //   })
  //   .catch((err) => {
  //     console.log("une erreur s'est produite");
  //   })
  // }
    default:
      next(action);
  }
}

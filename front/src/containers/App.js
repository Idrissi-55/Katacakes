import { connect } from "react-redux";
import App from "src/components/App";
import { fetchAllCakes } from "src/actions/cakes";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchAllCakes: () => {
    console.log('fetch cakes');
    const action = fetchAllCakes();
    dispatch(action);
  },
  // handleClick: () => {
  //   console.log(`Je dois sauvegarder l'idCake`)
  //   dispatch(handleClick());
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

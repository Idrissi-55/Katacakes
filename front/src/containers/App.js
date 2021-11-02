import { connect } from "react-redux";
import App from "src/components/App";
import { fetchAllCakes } from "src/actions/cakes";

const mapStateToProps = (state) => ({
  loading: state.cakes.loading,
  error: state.cakes.list.length === 0,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCakes: () => {
    console.log('fetch cakes');
    const action = fetchAllCakes();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

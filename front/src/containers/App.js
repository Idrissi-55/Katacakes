import { connect } from "react-redux";
import App from "src/components/App";
import { fetchRecipes } from "src/actions/recipes";

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
  error: state.recipes.list.length === 0,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => {
    console.log('fetch recipes');
    //const action = fetchRecipes();
    //dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { withRouter } from 'react-router-dom';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => {

  const {id} = ownProps.match.params;
  return {
    recipe: findRecipe(state.recipes.list, id),
  }
};

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

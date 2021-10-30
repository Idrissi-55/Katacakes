import { connect } from 'react-redux';
import Cake from 'src/components/Cake';
import { withRouter } from 'react-router-dom';
// import { findCake } from 'src/selectors/cakes';

const mapStateToProps = (state, ownProps) => {

  const {_id} = ownProps.match.params;
  console.log(state.recipes);
  return {
    recipe: state.recipes[ownProps.match.params.id]
  };
}
const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Cake);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

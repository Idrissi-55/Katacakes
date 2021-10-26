import { connect } from 'react-redux';
import Cake from 'src/components/Cake';
import { withRouter } from 'react-router-dom';
import { findCake } from 'src/selectors/cakes';

const mapStateToProps = (state, ownProps) => {

  const {id} = ownProps.match.params;
  return {
    cake: findCake(state.cakes.list, id),
  };
}
const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Cake);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

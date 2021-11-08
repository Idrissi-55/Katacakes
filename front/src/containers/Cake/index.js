import { connect } from 'react-redux';
import Cake from 'src/components/Cake';
import { withRouter } from 'react-router-dom';
import { findCake } from 'src/selectors/cakes';


const mapStateToProps = (state, ownProps) => {

  const {_id} = ownProps.match.params;
  const fetchedCake = findCake(state.cakes.list, _id)
  console.log(`Je fetch la Cake`, fetchedCake);
  return {
    cake: findCake(state.cakes.list, _id)
  };
  
}

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Cake);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

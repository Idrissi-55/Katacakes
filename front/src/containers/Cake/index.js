import { connect } from 'react-redux';
import Cake from 'src/components/Cake';
import { withRouter } from 'react-router-dom';
import { findCake } from 'src/selectors/cakes';


const mapStateToProps = (state, ownProps) => {
  const cakes =  state.cakes.list;
  const {_id} = ownProps.match.params;
  console.log(cakes.length);
  return {
    cake: findCake(state.cakes.list, _id)
  };
  
}
const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Cake);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

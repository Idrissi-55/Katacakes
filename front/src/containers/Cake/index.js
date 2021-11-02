import { connect } from 'react-redux';
import Cake from 'src/components/Cake';
import { withRouter } from 'react-router-dom';

import { fetchCake } from '../../actions/cakes';

const mapStateToProps = (state) => ({
  name: state.cake.name,
  thumbnail: state.cake.thumbnail,
  season: state.cake.seaon,
  description: state.cake.description

})
const mapDispatchToProps = (dispatch) => ({
  fetchCake: () => {
    fetchCake();
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(Cake);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

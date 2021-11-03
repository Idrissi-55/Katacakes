import { connect } from 'react-redux';
import Cake from 'src/components/Cake';
import { withRouter } from 'react-router-dom';

import { fetchCake, saveID } from '../../actions/cakes';

const mapStateToProps = (state) => ({
  name: state.cake.name,
  thumbnail: state.cake.thumbnail,
  season: state.cake.seaon,
  description: state.cake.description,
  idCake: state.cake.idCake

})
const mapDispatchToProps = (dispatch) => ({
  onclick: () => {
    dispatch(fetchCake());
  },
  saveID: (idCake) => {
    dispatch(saveID(idCake))
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(Cake);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

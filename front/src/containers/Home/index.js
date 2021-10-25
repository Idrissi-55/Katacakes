import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  cakes: state.cakes.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { connect } from 'react-redux';
import Cake from 'src/components/Cake';
import { withRouter } from 'react-router-dom';
import { findCake } from 'src/selectors/cakes';

const mapStateToProps = (state, ownProps) => {
// findRecipe est un Selector
// Il reçoit la liste de recettes, et un slug (titre) en paramètres
// J'obtiens en retour l'objet de recette que je cherche dans la liste
// Définition:
// Une fonction qui à partir du state et d'un ou plusieurs autres paramètres
// nous renvoie ce qui nous intéresse.

// J'ai besoin de trouver dans l'url le slug de la recette que je donne à findRecipe
  const {name} = ownProps.match.params;
  return {
    cake: findCake(state.cakes.list, name),
  };
}
const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Cake);

const containerWithRouter = withRouter(container);

export default containerWithRouter;

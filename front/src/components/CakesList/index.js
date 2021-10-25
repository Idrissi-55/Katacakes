import React from "react";
import { Card } from 'semantic-ui-react';
// import PropTypes from 'prop-types';
import './style.scss';

const CakesList = () => {
  
  return (
  <div className="cakeList">
    <Card.Group itemsPerRow={2} >
      
        <Card
          // image={repoObject.owner.avatar_url}
          header= "Cheese Cake"
          meta= "Spring"
          description="The most popular cake for spring made of berries"
        />
        <Card
          // image={repoObject.owner.avatar_url}
          header= "Pomgrannate cake"
          meta= "Autumn"
          description="A sweet cake, perfect for autumun with pomgrannates"
        />
        <Card
          // image={repoObject.owner.avatar_url}
          header= "Cheese Cake"
          meta= "Spring"
          description="The most popular cake for spring made of berries"
        />
        <Card
          // image={repoObject.owner.avatar_url}
          header= "Pomgrannate cake"
          meta= "Autumn"
          description="A sweet cake, perfect for autumun with pomgrannates"
        />
      
    </Card.Group>
  </div>
  )}

export default CakesList;

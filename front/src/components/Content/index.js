import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Card';

import './style.scss';

const Content = ({ title, text, cakes }) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    <p className="content-text">{text}</p>
    {cakes && (
      <div className="content-list">
        {cakes.map((cake) => (
          <Card key={cake.id} {...cake} />
        ))}
      </div>
    )}
  </section>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cakes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Content.defaultProps = {
  cakes: null,
};

export default Content;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section>
        <h2
          data-testid="name-card"
          name="cardName"
        >
          { cardName }
        </h2>
        <img
          data-testid="image-card"
          name="cardImage"
          src={ cardImage }
          alt={ cardName }
        />
        <p
          name="cardDescription"
          data-testid="description-card"
        >
          { cardDescription }

        </p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        <div>
          { cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : <p />}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardRare: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

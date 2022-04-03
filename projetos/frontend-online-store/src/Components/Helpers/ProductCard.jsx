import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Styles/ProductsCard.css';

export default class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  render() {
    const { title, img, price, id, rebimboca } = this.props;
    const { quantity } = this.state;
    const infoProduto = { title, img, price, id, quantity };

    return (
      <div className="card-container">
        <Link
          to={ { pathname: `/details/${id}`,
            state: { title, img, price, id, quantity } } }
          data-testid="product-detail-link"
        >
          <div className="product-card" data-testid="product">
            <h3>{title}</h3>
            <div className="item">
              <img src={ img } alt={ title } />
              <p>
                Preço:
                { price }
              </p>
            </div>

          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => {
            rebimboca(infoProduto);
          } }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  rebimboca: PropTypes.func.isRequired,
};

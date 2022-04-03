import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avaliation from './Helpers/Avaliation';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    const { cart } = this.state;
    const obj = cart.find((prod) => prod.id === product.id);
    if (obj !== undefined) {
      this.verifyRepeatedItem(obj);
    } else {
      const listaCompras = [...cart, product];
      this.setState({ cart: listaCompras });
      localStorage.setItem('carrinho', JSON.stringify(listaCompras));
    }
  }

  verifyRepeatedItem = (product) => {
    const { id } = product;
    const { cart } = this.state;
    product.quantity += 1;
    const updatedCart = [...cart.filter((e) => e.id !== id), product];
    this.setState({ cart: updatedCart });
    localStorage.setItem('carrinho', JSON.stringify(updatedCart));
  }

  getCart = () => {
    const data = JSON.parse(localStorage.getItem('carrinho'));
    this.setState({ cart: data });
  }

  componentDidMount = () => {

  }

  render() {
    const { location: { state: { id, title, img, price, quantity } } } = this.props;
    return (
      <div>
        <div className="product-detail-nav">
          <Link to="/">
            <button type="button">Voltar</button>
          </Link>
          <Link to="/carrinho" data-testid="shopping-cart-button">
            <button type="button">Carrinho</button>
          </Link>
        </div>
        <div className="product-details-info">
          <div>{id}</div>
          <div data-testid="product-detail-name">{title}</div>
          <div>
            <img src={ img } alt={ title } />
          </div>
          <div>{price}</div>
          <div>{quantity}</div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => { this.addToCart({ id, title, img, price, quantity }); } }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <Avaliation />
      </div>
    );
  }
}

ProductDetail.propTypes = {
  // attribute: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

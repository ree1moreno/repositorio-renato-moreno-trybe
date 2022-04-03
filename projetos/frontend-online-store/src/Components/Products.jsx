import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './Helpers/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Products extends Component {
  constructor(props) {
    super(props);
    const { query, idCategory } = this.props;
    this.state = {
      products: {},
      query,
      idCategory,
      isLoaded: false,
      carrinho: [],
    };
  }

  cliqueParaCarrinho = (parafuseta) => {
    this.verificacaoLocalStorage();
    const { carrinho } = this.state;
    const obj = carrinho.find((prod) => prod.id === parafuseta.id);
    if (obj !== undefined) {
      this.verifyRepeatedItem(obj);
    } else {
      const listaCompras = [...carrinho, parafuseta];
      this.setState({ carrinho: listaCompras });
      localStorage.setItem('carrinho', JSON.stringify(listaCompras));
    }
  }

  verifyRepeatedItem = (product) => {
    const { id } = product;
    const { carrinho } = this.state;
    product.quantity += 1;
    const updatedCart = [...carrinho.filter((e) => e.id !== id), product];
    this.setState({ carrinho: updatedCart });
    localStorage.setItem('carrinho', JSON.stringify(updatedCart));
  }

  verificacaoLocalStorage = () => {
    const valorLocalStorage = localStorage.getItem('carrinho');
    if (!valorLocalStorage) {
      localStorage.setItem('carrinho', []);
    }
  }

  fetchProducts = async (id, query) => {
    const data = await getProductsFromCategoryAndQuery(id, query);
    this.setState({
      products: data,
      isLoaded: true,
    });
  }

  componentDidMount = () => {
    const { idCategory, query } = this.state;
    this.fetchProducts(idCategory, query);
    this.verificacaoLocalStorage();
  }

  render() {
    const { products, isLoaded } = this.state;
    const { results } = products;

    return (
      <div>
        {
          isLoaded ? (
            results.map((e) => {
              const { title, thumbnail, price, id } = e;
              return {
                title,
                img: thumbnail,
                price,
                id,
              };
            }).map((e) => (<ProductCard
              key={ e.id }
              { ...e }
              rebimboca={ this.cliqueParaCarrinho }
            />))
          )
            : (<h2>Carregando...</h2>)
        }
      </div>
    );
  }
}

Products.propTypes = {
  query: PropTypes.string.isRequired,
  idCategory: PropTypes.string.isRequired,
};

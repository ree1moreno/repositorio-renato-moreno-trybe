import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Categories from './Categories';
import Products from './Products';
import Header from './Helpers/Header';
import './Styles/Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchBar: '',
      query: '',
      idCategory: '',
    };
  }

  onChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: [value],
    });
  }

  onClickButton = () => {
    const { searchBar } = this.state;
    this.setState({
      query: searchBar,
    });
  }

  onClickCategories = (event) => {
    const { id } = event.target;
    this.setState({ idCategory: id });
  }

  render() {
    const { searchBar, query, idCategory } = this.state;
    return (
      <div>
        <Header />
        <div className="main-container">
          <div className="products-container">
            <div className="search-cart">
              <input
                data-testid="query-input"
                type="text"
                name="searchBar"
                value={ searchBar }
                onChange={ this.onChangeInput }
                placeholder="Pesquisar"
              />
              <button
                type="button"
                data-testid="query-button"
                onClick={ this.onClickButton }
                className="search-button"
              >
                Pesquisar
              </button>
              <Link
                to="/carrinho"
                data-testid="shopping-cart-button"
                className="cart-link"
              >
                <FontAwesomeIcon icon={ faCartArrowDown } />
              </Link>
            </div>
            <div className="products">
              {!query && !idCategory ? (
                <h1
                  data-testid="home-initial-message"
                >
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </h1>) : (<Products query={ query } idCategory={ idCategory } />
              )}
            </div>
          </div>
          <div className="categories">
            <Categories onClickEvent={ this.onClickCategories } />
          </div>
        </div>
      </div>
    );
  }
}

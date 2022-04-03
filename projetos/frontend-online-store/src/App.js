import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Carrinho from './Components/CarrinhoCompra';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/carrinho" component={ Carrinho } />
        <Route
          exact
          path="/details/:id"
          render={ (props) => <ProductDetail { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

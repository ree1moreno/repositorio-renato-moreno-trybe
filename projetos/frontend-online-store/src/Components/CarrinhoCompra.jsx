import React from 'react';

class Carrinho extends React.Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
    };
  }

  componentDidMount = () => {
    this.itensLocais();
  }

  itensLocais() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    this.setState({ carrinho });
  }

  render() {
    const { carrinho } = this.state;

    return (
      <div>
        {
          !carrinho ? (
            <div>
              <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
            </div>
          ) : (
            <div>
              {
                carrinho.map((e) => (
                  <div key={ e.id }>
                    <div data-testid="shopping-cart-product-name">{e.title}</div>
                    <div>
                      <img src={ e.img } alt={ e.title } />
                    </div>
                    <div>
                      <p>{ e.price }</p>
                    </div>
                    <div
                      data-testid="shopping-cart-product-quantity"
                    >
                      {e.quantity}
                    </div>
                  </div>))
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default Carrinho;

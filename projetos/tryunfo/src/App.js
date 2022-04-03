import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardSaved: [],
    };

    // this.onInputChange = this.onInputChange.bind(this);
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      this.validateInput();
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();

    this.setState((prevState) => {
      const { cardName, cardDescription, cardImage } = this.state;

      const newCard = { cardName, cardDescription, cardImage };

      return {
        cardSaved: [...prevState.cardSaved, newCard],
      };
    }, () => {
      this.setState({
        cardName: '',
        cardImage: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
        hasTrunfo: true,
      });
    });
  }

  validateInput() {
    const { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;

    const maxAttrValue = 90;
    const maxAttrSUM = 210;

    const emptyInput = cardName.length === 0
    || cardDescription.length === 0
    || cardImage.length === 0;

    const attrIsValid = (cardAttr1 >= 0 && cardAttr1 <= maxAttrValue)
    && (cardAttr2 >= 0 && cardAttr2 <= maxAttrValue)
    && (cardAttr3 >= 0 && cardAttr3 <= maxAttrValue);

    const attrSumIsValid = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10) > maxAttrSUM;

    const isFormValid = emptyInput || !(attrIsValid) || attrSumIsValid;

    this.setState({
      isSaveButtonDisabled: isFormValid,
    });
  }

  render() {
    const { cardSaved } = this.state;
    return (
      <div>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            { ...this.state }
          />
          <Card { ...this.state } />
        </main>
        <section>
          <h2>Cartas adicionadas:</h2>
          <ul>
            {cardSaved.map((card) => (
              <li key={ card.cardName }>
                { card.cardName }
                {' '}
                {' '}
                { card.cardDescription }
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
export default App;

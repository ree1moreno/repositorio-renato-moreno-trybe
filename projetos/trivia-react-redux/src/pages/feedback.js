import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../component/header/header';

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.goToRank = this.goToRank.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    return history.push('/');
  }

  goToRank() {
    const { history } = this.props;
    return history.push('/rank');
  }

  render() {
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    const avarage = 3;

    return (
      <div>
        <Header />
        <span>
          Acertos totais:

          <span data-testid="feedback-total-question">
            {assertions}
          </span>
        </span>
        { (assertions >= avarage)
          ? <span data-testid="feedback-text">Mandou bem!</span>
          : <span data-testid="feedback-text">Podia ser melhor...</span>}
        <span>
          Total de pontos:

          <span data-testid="feedback-total-score">
            {score}
          </span>
        </span>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => this.handleClick() }
        >
          Jogar novamente
        </button>
        <button
          data-testid="btn-ranking"
          onClick={ () => this.goToRank() }
          type="button"
        >
          Ver ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Feedback;

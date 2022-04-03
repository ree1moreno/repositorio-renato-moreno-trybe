import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Rank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    this.generateRank();
  }

  generateRank() {
    const rankingArray = [];
    const {
      player: { name, score },
    } = JSON.parse(localStorage.getItem('state'));
    const playerObj = {
      name,
      score,
    };
    // falta pegar a imagem do jogador
    rankingArray.push(playerObj);
    localStorage.setItem('ranking', JSON.stringify([...rankingArray]));
    this.setState(() => ({ ranking: rankingArray }));
  }

  handleClick() {
    const { history } = this.props;
    return history.push('/');
  }

  render() {
    const { ranking } = this.state;
    console.log(ranking, 'ranking');

    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {
          ranking
            .sort((a, b) => b.score - a.score)
            .map((player, index) => (
              <div key={ index }>
                <p
                  data-testid={ `player-name-${index}` }
                >
                  {`Jogador: ${player.name}`}
                </p>
                <p
                  data-testid={ `player-score-${index}` }
                >
                  {`Pontuação: ${player.score}`}
                </p>
              </div>
            ))
        }
        <button
          data-testid="btn-go-home"
          onClick={ () => this.handleClick() }
          type="button"
        >
          Página inicial
        </button>
      </div>
    );
  }
}

Rank.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Rank;

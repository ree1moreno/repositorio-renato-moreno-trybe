import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { questionsAction } from '../redux/actions';
import GameCard from '../component/cardgame/GameCard';
import Header from '../component/header/header';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {
        name: '',
        assertions: 0,
        score: 0,
        gravatarEmail: '',
      },
    };
  }

  componentDidMount() {
    const { token, getQuestions } = this.props;
    localStorage.setItem('state', JSON.stringify(this.state));
    getQuestions(token);
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header />
        <Link to="/"> Início </Link>
        <GameCard history={ history } />
      </div>
    );
  }
}

Game.propTypes = {
  getQuestions: PropTypes.func,
  history: PropTypes.shape(PropTypes.func),
  token: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(questionsAction(token)),
});

const mapStateToProps = (state) => ({
  token: state.login.token,
  // game: state.game,
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

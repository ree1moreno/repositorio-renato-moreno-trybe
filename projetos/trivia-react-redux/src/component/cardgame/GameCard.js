import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../../pages/loading';
import { updateScoreAction } from '../../redux/actions';
import BtnOptions from './BtnOptions';
import './GameCard.css';

class GameCard extends Component {
  constructor(props) {
    super(props);

    this.shuffleAnswers = this.shuffleAnswers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeColors = this.removeColors.bind(this);
    this.checkAnswered = this.checkAnswered.bind(this);
    this.switchRandom = this.switchRandom.bind(this);

    this.state = {
      timer: 30,
      u: 0,
      answered: false,
      isRandom: false,
    };
  }

  componentDidMount() {
    const second = 1;
    const milisecond = 1000;
    setInterval(() => {
      this.setState(({ timer }) => ({
        timer: timer - second,
      }));
    }, milisecond);
  }

  componentDidUpdate(_prevProps, prevState) {
    const { u, isRandom } = this.state;
    // DARIA PARA SER FEITO COM PREVPROPS MAS EDU MANDOU O NAO TA TÃO RUIM
    if (!isRandom) {
      this.shuffleAnswers();
      this.switchRandom();
    }
    if (u !== prevState.u) this.shuffleAnswers();
  }

  switchRandom() {
    this.setState({ isRandom: true });
  }

  shuffleAnswers() {
    const { u } = this.state;
    const { game } = this.props;
    const {
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
      difficulty,
    } = game.questions[u];

    const magicNumber = 0.5;
    const newParam2 = incorrectAnswers
      .map((el, index) => ({ answer: el, testid: `wrong-answer-${index}` }));
    const answerList = [{ answer: correctAnswer, testid: 'correct-answer' },
      ...newParam2];
    const randomList = answerList.sort(() => magicNumber - Math.random());
    const gameData = { difficulty, randomList };

    this.setState({ gameData });
  }

  removeColors() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach((el) => ((el.classList.remove('correct', 'wrong'),
    el.removeAttribute('disabled'))));
  }

  checkAnswered() {
    const { answered } = this.state;
    this.setState({ answered: !answered });
  }

  handleClick() {
    let { u } = this.state;
    const { history } = this.props;
    const lastQuestion = 5;
    this.setState({ u: u += 1, timer: 30 });
    this.removeColors();
    this.checkAnswered();
    if (u === lastQuestion) {
      history.push('/feedback');
    }
    return u;
  }

  render() {
    const { loading, game, updateScoreDispatch } = this.props;
    const { u, answered, gameData, timer } = this.state;

    if (loading) {
      return <Loading />;
    }
    const {
      category,
      question,
    } = game.questions[u];

    return (
      <div>
        <h2>carregou</h2>
        <div>
          <h3 data-testid="question-category">{ category }</h3>
          <span data-testid="question-text">
            { question }
          </span>
          <BtnOptions
            timer={ timer }
            answered={ answered }
            answers={ gameData }
            checkAnswered={ this.checkAnswered }
          />
          <span>
            { timer <= 0 ? 'Acabou o tempo' : timer }
          </span>
          {(answered || timer <= 0) && (
            <button
              type="button"
              data-testid="btn-next"
              onClick={ () => ((this.handleClick(), updateScoreDispatch(true))) }
            >
              Próxima
            </button>
          )}
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  game: PropTypes.shape({
    correct_answer: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.string),
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  loading: PropTypes.bool,
  updateScoreDispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  loading: state.game.isLoading,
  game: state.game,
  updateScore: state.header.updateScore,
});

const mapDispatchToProps = (dispatch) => ({
  updateScoreDispatch: (bool) => dispatch(updateScoreAction(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameCard);

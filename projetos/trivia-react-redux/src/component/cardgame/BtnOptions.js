import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BtnOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {
        name: '',
        assertions: 0,
        score: 0,
        gravatarEmail: '',
      },
      // isNewQuestion: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.verifyAnswer = this.verifyAnswer.bind(this);
    this.showColors = this.showColors.bind(this);
    this.sumPoints = this.sumPoints.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  showColors() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach((el) => (el.getAttribute('data-testid').match(/correct/i)
      ? (el.classList.add('correct'), el.setAttribute('disabled', 'disabled'))
      : (el.classList.add('wrong'), el.setAttribute('disabled', 'disabled'))));
  }

  verifyAnswer({ target }) {
    // console.log(target);
    const { userName, userEmail } = this.props;
    const { player } = this.state;
    this.setState((prevstate) => ({
      player: { ...prevstate.player, name: userName, gravatarEmail: userEmail } }));
    const points = target.getAttribute('data-testid')
      .match(/correct/i)
      ? ((console.log('funcionou'),
      this.setState((prevstate) => ({
        player: { ...prevstate.player,
          assertions: player.assertions + 1,
          score: player.score + this.sumPoints() } }))))
      : console.log(0);
    console.log('descarte', points);
  }

  sumPoints() {
    // console.log('sumPoints');
    // const { timeLeft } = this.state;
    const { answers: { difficulty }, timer } = this.props;
    const ten = 10;
    const diffPts = { easy: 1, medium: 2, hard: 3 };
    let result = 0;
    // console.log(timer, 'timer');
    switch (difficulty) {
    case 'easy':
      result = ten + (timer * diffPts.easy);
      // console.log(result);
      return result;
    case 'medium':
      result = ten + (timer * diffPts.medium);
      // console.log(result);
      return result;
    case 'hard':
      result = ten + (timer * diffPts.hard);
      // console.log(result);
      return result;
    default:
      // console.log('default');
      return 0;
    }
  }

  checkTimer(timer) {
    return (timer === 0) && this.showColors();
  }

  handleClick(e) {
    const { checkAnswered } = this.props;
    checkAnswered();
    this.showColors();
    this.verifyAnswer(e);
    // this.setState({ isNewQuestion: true });
  }

  render() {
    const { answers, timer } = this.props;

    return (
      <div id="button-wrapper">
        { answers && (
          <div>
            {
              answers.randomList.map(
                (element, index) => (
                  <button
                    className="answer"
                    type="button"
                    key={ index }
                    data-testid={ element.testid }
                    onClick={ (e) => ((/* this.setState({ timeLeft: timer }), */
                      this.handleClick(e))) }
                  >
                    { element.answer }
                  </button>
                ),
              )
            }
          </div>
        )}
        {this.checkTimer(timer)}
      </div>
    );
  }
}

BtnOptions.propTypes = {
  answers: PropTypes.shape({
    newAnswerList: PropTypes.shape({
      map: PropTypes.func,
    }),
    testIdList: PropTypes.arrayOf(PropTypes.string),
  }),
  checkAnswered: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  userName: state.login.name,
  userEmail: state.login.email,
});

export default connect(mapStateToProps)(BtnOptions);

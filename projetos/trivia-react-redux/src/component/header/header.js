import PropTypes from 'prop-types';
import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { gravatarApi } from '../../api/service/index';
import { updateScoreAction } from '../../redux/actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.userImg = this.userImg.bind(this);

    this.state = {
      // criar action para alterar o isUpdated na store do redux e chamar a action de volta no
      // botão próximo do game card
      // updateScore: false,
      score: 0,
      imgUrl: '',
    };
  }

  componentDidMount() {
    this.userImg();
  }

  componentDidUpdate() {
    const { updateScoreDispatch, updateScore } = this.props;
    const retrievedData = localStorage.getItem('state');
    if (retrievedData) {
      const { player: { score } } = JSON.parse(retrievedData);
      if (updateScore) this.addState(score);
    }
    updateScoreDispatch(false);
  }

  addState(score) {
    this.setState({ score });
  }

  userImg() {
    const { emailUser } = this.props;
    const md5Email = md5(emailUser).toString();
    this.setState({ imgUrl: gravatarApi(md5Email) });
  }

  render() {
    const { nameUser } = this.props;
    const { imgUrl, score } = this.state;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ imgUrl }
          alt="gra_vatar"
        />
        <span data-testid="header-player-name">{` Nome: ${nameUser}`}</span>
        <span data-testid="header-score">{ score }</span>
      </header>
    );
  }
}

Header.propTypes = {
  gravatarImg: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  nameUser: state.login.name,
  scoreUser: state.login.score,
  emailUser: state.login.email,
  updateScore: state.header.updateScore,
});

const mapDispatchToProps = (dispatch) => ({
  updateScoreDispatch: (bool) => dispatch(updateScoreAction(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

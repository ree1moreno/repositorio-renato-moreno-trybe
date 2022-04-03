import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getToken } from '../api/service';
import { loginAction, tokenAction } from '../redux/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      token: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setToken = this.setToken.bind(this);
  }

  setToken() {
    getToken()
      .then((result) => localStorage
        .setItem('token', result.token));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { loginDispatch, history, tokenDispatch } = this.props;
    this.setToken();
    loginDispatch(this.state);
    tokenDispatch();
    history.push('/game');
  }

  render() {
    const { name, email } = this.state;
    const btnState = !(name && email);

    return (
      <div>
        <form>
          <input
            data-testid="input-player-name"
            placeholder="Nome"
            name="name"
            onChange={ (e) => this.handleChange(e) }
          />
          <input
            data-testid="input-gravatar-email"
            placeholder="Email"
            name="email"
            onChange={ (e) => this.handleChange(e) }
          />
          <button
            data-testid="btn-play"
            type="button"
            onClick={ () => this.handleClick() }
            disabled={ btnState }
          >
            Jogar
          </button>
        </form>
        <Link data-testid="btn-settings" to="/config">
          Configuração
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  loginDispatch: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (state) => dispatch(loginAction(state)),
  tokenDispatch: () => dispatch(tokenAction()),
});

export default connect(null, mapDispatchToProps)(Login);

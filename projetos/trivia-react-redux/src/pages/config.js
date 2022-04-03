import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Config extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="settings-title">Configurações...</h1>
        <Link to="/"> Início </Link>
      </div>
    );
  }
}

export default Config;

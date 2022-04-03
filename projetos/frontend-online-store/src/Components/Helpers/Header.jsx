import React from 'react';
import logo from '../../img/store-logo.png';
import '../Styles/Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <img
          className="header-logo"
          src={ logo }
          alt="store logo"
        />
        <h1 className="header-title">Online Store</h1>
      </div>
    );
  }
}

import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Header = props => {
  return (
    <header className="webisteHeader">
    <div className="left">
      <h1>
        <img src="./logo3.svg" alt="Nemo" />
        Third party order
      </h1>
    </div>
    <div className="right">
    <button> ☰</button>
    </div>
  </header>
  );
};

export default Header;
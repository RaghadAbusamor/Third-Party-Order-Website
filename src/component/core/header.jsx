import React from 'react';
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
  </header>
  );
};

export default Header;
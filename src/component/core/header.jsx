import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';

import './header.css';

const Header = props => {


  return (
    <header className="webisteHeader">
      <div className="left">
        <h1>
          <img src="./logo3.svg" alt="TPO" />
          Third party order
        </h1>
      </div>
      <div className="right">
        <i> ☰</i>
      </div>
    </header>
  );
};

export default Header;
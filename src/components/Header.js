import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
      <div className='flexbox-container'>
        <Link to='/' className='logo'>
          <span></span>
        </Link>
        <nav>
          <Link to='/Teams'>Teams</Link>
        </nav>
      </div>
    </header>
);

export default Header;
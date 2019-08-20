import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../context/theme';

const activeStyle = {
  color: 'gold'
}

export default function Nav ({ toggleTheme }) {
  const theme = React.useContext(ThemeContext);
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <NavLink to="/" 
          exact
          activeStyle={activeStyle}className="nav-link">Popular</NavLink>
          </li>
        <li>
          <NavLink to="/battle"
          activeStyle={activeStyle}className="nav-link">Battle</NavLink>
        </li>
      </ul>
      <button
        style={{fontSize: '30px'}}
        className="btn-clear"
        onClick={toggleTheme}
      >
      {theme === 'light' ? '🔦' : '💡'}
      </button>
    </nav>
  )
}

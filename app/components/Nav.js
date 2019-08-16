import React from 'react';
import { ThemeConsumer } from '../context/theme';

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <button
            style={{fontSize: '30px'}}
            className="btn-clear"
            onClick={toggleTheme}
          >
          {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}

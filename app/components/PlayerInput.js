import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../context/theme';

function PlayerInput ({ onSubmit, label }) {
  const [username, setUsername] = React.useState('');
  const theme = React.useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(username)
  }
  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  return (
    <form className="column player" onSubmit={handleSubmit}>
      <label htmlFor="username" className="player-label">
        {label}
      </label>
      <div className="row player-inputs">
        <input 
            type="text"
            id="username"
            className={`input-${theme}`}
            placeholder="github username"
            autoComplete="off"
            value={username}
            onChange={handleChange}
        />
      <button 
        className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
        type="submit"
        disabled={!username}
      >
        Submit
      </button>
      </div>
    </form>
  )
}


PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default PlayerInput;

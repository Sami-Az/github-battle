import React, { Component } from 'react'

class Popular extends Component {
  render() {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Pyphon']
    return (
      <ul className="flex-center">
        {languages.map(language => (
          <li key={language}>
            <button className="btn-clear nav-link">
                {language}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default Popular;

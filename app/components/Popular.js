import React, { Component } from 'react'

class Popular extends Component {
  constructor() {
    super()
    this.state = {
      selectedLanguages: 'All'
    }
  }
  render() {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Pyphon']
    return (
      <ul className="flex-center">
        {languages.map(language => (
          <li key={language}>
            <button 
              className="btn-clear nav-link"
              onClick={ () => this.setState({ selectedLanguages: language})}
            >
                {language}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default Popular;

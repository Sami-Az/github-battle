import React, { Component } from 'react';
import LanguagesNav from './LanguagesNav';

class Popular extends Component {
  constructor() {
    super()
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
 updateLanguage (lang) {
  this.setState({ selectedLanguage: lang})
  }
  render() {
    return (
      <LanguagesNav 
        selected={this.state.selectedLanguage}
        onUpdateLangage={this.updateLanguage}
      />
    )
  }
}

export default Popular;

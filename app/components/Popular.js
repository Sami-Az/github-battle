import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api';
import LanguagesNav from './LanguagesNav';


class Popular extends Component {
  constructor() {
    super()
    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null
    }
    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }
  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }
 updateLanguage (lang) {
  this.setState({ 
    selectedLanguage: lang,
    error: null,
    repos: null
  })

  fetchPopularRepos(lang) 
    .then((repos) => this.setState({
      repos,
      error: null
    }))
    .catch(() => {
      console.warn('Error fetching repos: ', error)
      this.setState({
        error: `There was an error fetching the repositories.`
      })
    })
  }
    isLoading () {
      return this.state.repos === null && this.state.error === null
    }
  render() {
    const { selectedLanguage, repos, error} = this.state;
  
    return (
      <React.Fragment>
        <LanguagesNav 
          selected={selectedLanguage}
          onUpdateLangage={this.updateLanguage}
        />
        {this.isLoading() && <p>LOADING...</p>}

        {error && <p>{error}</p>}

        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </React.Fragment>
    )
  }
}

export default Popular;

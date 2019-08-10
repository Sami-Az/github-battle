import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api';
import LanguagesNav from './LanguagesNav';
import ReposGrid from './ReposGrid';

class Popular extends Component {
  constructor() {
    super()
    this.state = {
      selectedLanguage: 'All',
      repos: {},
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
      error: null
    })
    if (!this.state.repos[lang]) {
      fetchPopularRepos(lang) 
        .then((data) => {
          this.setState(({ repos }) => ({
            repos  : {
              ...repos,
              [lang]: data
            }
        }))
      })
        .catch(() => {
          console.warn('Error fetching repos: ', error)
          this.setState({
            error: `There was an error fetching the repositories.`
          })
        })
    }
  }
    isLoading () {
      const { selectedLanguage, repos, error} = this.state;

      return !repos[selectedLanguage] && error === null
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

        {error && <p className='center-text error'>{error}</p>}

        {repos[selectedLanguage] 
        && 
        <ReposGrid 
          repos={repos[selectedLanguage]}
         />
         }
      </React.Fragment>
    )
  }
}

export default Popular;

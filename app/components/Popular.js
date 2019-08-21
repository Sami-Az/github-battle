import React from 'react';
import { fetchPopularRepos } from '../utils/api';
import LanguagesNav from './LanguagesNav';
import ReposGrid from './ReposGrid';
import Loading from './Loading';

function popularReducer (state, action) {
  if (action.type === 'success') {
    return {
      ...state,
      [action.selectedLanguage]: action.repos,
      error: null
    }
  } else if (action.type === 'error') {
    return {
      ...state,
      error: action.error.message
    }
  } else {
    throw Error (`That action type isn't supported.`)
  }
}


export default function Popular () {
  const [selectedLanguage, setSelectedLanguage] = React.useState('All')
  const [state, dispatch] = React.useReducer(
    popularReducer,
    { error: null }
  )

  const fetchedLanguages = React.useRef([]);

  React.useEffect(() => {
    if (fetchedLanguages.current.includes(selectedLanguage) === false ) {
      fetchedLanguages.current.push(selectedLanguage)

      fetchPopularRepos(selectedLanguage)
        .then((repos) => {
          dispatch( { type: 'success', selectedLanguage, repos })
        })
        .catch((error) => {
          dispatch({ type: 'error', error })
        })
    }
  }, [fetchedLanguages, selectedLanguage])

  const isLoading = () => !state[selectedLanguage] && state.error === null

  return (
    <React.Fragment>
      <LanguagesNav 
        selected={selectedLanguage}
        onUpdateLangage={setSelectedLanguage}
      />
      {isLoading() && <Loading text='Fetching Repos' />}

      {state.error && <p className='center-text error'>{error}</p>}

      {state[selectedLanguage] 
      && 
      <ReposGrid 
        repos={state[selectedLanguage]}
        />
        }
    </React.Fragment>
  )
}


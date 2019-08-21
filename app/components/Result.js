import React, { Component } from 'react';
import queryString from 'query-string';
import { battle } from '../utils/api';
import { Link } from 'react-router-dom';
import Card from './Card';
import ProfileList from './ProfileList';
import Loading from './Loading';

function resultReducer (state, action) {
  if (action.type === 'success') {
    return {
      winner: action.winner,
      loser: action.loser,
      error: null,
      loading: false
    } 
  } else if (action.type === 'error') {
    return {
      ...state,
      error: action.message,
      loading: false
    }
  } else {
    throw Error (`That action type isn't supported`)
  }
}
function Result ({ location }) {
  const { playerOne, playerTwo } = queryString.parse(location.search);
  const [state, dispatch] = React.useReducer(
    resultReducer,
    { winner: null, loser: null, error: null, loading: true }
  )

  React.useEffect(() => {
    battle([ playerOne, playerTwo ])
    .then((player) => dispatch({ type: 'success', winner: player[0], loser: player[1] }))
    .catch(({ message }) => dispatch({ type: 'error', message }))

  }, [playerOne, playerTwo])

  const  { winner, loser, error, loading } = state;

  if (loading === true ) {
    return <Loading text='Battling' />
  }

  if (error) {
    return (
      <p className='center-text error'>{error}</p>
    )
  }
  
  return (
    <React.Fragment>
      <div className="grid space-around container-sm">
        <Card 
          header={winner.score === loser.score ? 'Tie': 'Winner'}
          subheader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList 
            profile={winner.profile}
          />
        </Card>
        <Card 
          header={winner.score === loser.score ? 'Tie': 'Loser'}
          subheader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.profile.avatar_url}
          href={loser.profile.html_url}
          name={loser.profile.login}
        >
          <ProfileList 
            profile={loser.profile}
          />
        </Card>
      </div>
      <Link 
        className="btn dark-btn btn-space"
        to='/battle'
      >
        Reset
      </Link>
    </React.Fragment>
  )
}

export default Result;

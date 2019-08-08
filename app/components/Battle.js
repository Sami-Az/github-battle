import React, { Component } from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';
import PlayerInput from './PlayerInput';

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h1 className="center-text header-lg">
        INSTRUCTIONS
      </h1>
      <ol className="container-sm grid center-text battle-instructions">
        <li>
          <h3 className="header-sm">Enter two Github users</h3>
          <FaUserFriends className="bg-light" color="rgb(255, 191, 116)" size={140} />
        </li>
        <li>
          <h3 className="header-sm">Battle</h3>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li>
          <h3 className="header-sm">See the winners</h3>
          <FaTrophy className="bg-light" color="rgb(255, 215, 0)" size={140} />
        </li>
      </ol>
    </div>
  )
}

class Battle extends Component {
  render() {
    return (
      <React.Fragment>
        <Instructions />
        <PlayerInput 
          label='label'
          onSubmit={(value) => console.log('value !', value)}
        />
      </React.Fragment>
    )
  }
}

export default Battle;

import React, { Component } from 'react'

class Result extends Component {
  render() {
    return (
      <div>
        Results
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}

export default Result;

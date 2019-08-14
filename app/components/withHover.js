import React from 'react';

export default function withHover(Component) {
  return class WithHover extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        hovering: false
      }
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
    }

    onMouseOver () {
      this.setState({
        hovering: true
      })
    }
    onMouseOut () {
      this.setState({
        hovering: false
      })
    }
    render () {
      return (
        <div 
          onMouseOver={this.onMouseOver} 
          onMouseOut={this.onMouseOut}
        >
          <Component 
            hovering={this.state.hovering}
            {...this.props}
          />
        </div>
      )
    }
  }
}

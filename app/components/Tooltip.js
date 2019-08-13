import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px'
  }
}
class Tooltip extends Component {
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

  render() {
    const { text, children } = this.props;
    const { hovering } = this.state;

    return (
      <div
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        style={styles.container}
      >
        {hovering === true && (
          <div style={styles.tooltip}>{text}</div>
        )}
        {children}
      </div>
    )
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired
}

export default Tooltip;
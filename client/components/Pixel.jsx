import React from 'react'

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {
        backgroundColor: 'green',
        height: '50px',
        width: '50px'
      }  
    }
  }
  render() {
    return (
      <div style={this.state.style}></div>
    )}
}

export default Pixel
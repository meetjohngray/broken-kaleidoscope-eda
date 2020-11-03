import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      style: {
        backgroundColor: randomHexColor(),
        height: '10px',
        width: '10px'
      }  
    }
  }

  clickHandler = evt => {
    this.setState({
      style: {
        backgroundColor: randomHexColor(),
        height: '10px',
        width: '10px'
      }
    })
  }
  
  mouseEnter = evt => {
    this.setState({
      style: {
        backgroundColor: 'green',
        height: '10px',
        width: '10px'
      }
    })
  }

  render() {
    return (
      <div 
        style={this.state.style} 
        onClick={this.clickHandler}
        onMouseEnter={this.mouseEnter}
      >    
      </div>
    )}
}

export default Pixel
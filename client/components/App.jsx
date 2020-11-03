import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  render (){
    return (
      <>
        {Array.from({length: 10000}, ()=>(<Pixel />))}
      </>
    )
    }
}

export default App

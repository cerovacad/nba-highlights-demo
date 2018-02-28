import React, { Component } from 'react'
import Featured from './Featured'
import Subscribe from './Subscribe'
import Blocks from './Blocks'


const URL = 'http://localhost:3004/home'

class Home extends Component {
  state = { 
    slider: '',
    blocks: ''
   }

  componentDidMount(){
    fetch(URL,{method: 'GET'})
    .then(response => response.json())
    .then(json => {
      this.setState({
        slider: json.slider,
        blocks: json.blocks
      })
    })
  }

  render() {
    return (
      <div>
        <Featured slider={this.state.slider}/>
        <Subscribe/>
        <Blocks blocks={this.state.blocks}/>
       </div>
    );
  }
}

export default Home 
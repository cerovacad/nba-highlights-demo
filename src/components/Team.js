import React, { Component } from 'react'

const URL = 'http://localhost:3004/teams'


class Team extends Component {
  constructor(props){
    super(props)

    this.state = { 
      data: []
    }

  }
  
  componentDidMount(){
    fetch(`${URL}?name=${this.props.match.params.id}`,{method: 'GET'})
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json
      })
    })
  }

  renderSquad = (squad) => {
    return squad.map((player) => {
      return (
        <div key={player.name} className='player'>
          <img alt={player.name} src='/images/avatar.png'/>
          <h4>{player.name}</h4>
          <div className='node'><span>Number:</span>{player.number}</div>
          <div className='node'><span>PPG:</span>{player.PPG}</div>
          <div className='node'><span>APG:</span>{player.APG}</div>
          <div className='node'><span>RPG:</span>{player.RPG}</div>
        </div>
      )
    })
  }
  
  renderData = (data) => {
    if(data){
      return data.map((item) => {
        return(
          <div key={item.id} className='team-data-wrapper'>
            <div className='left'>
              <img alt={item.name} src={`/images/teams/${item.logo}`}/>
            </div>
            <div className='right'>
              <h1>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
              <p>{item.description}</p>
              <hr/>
              <div className='squad'>
                {this.renderSquad(item.squad)}
              </div>
            </div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className='team-data'>
        {this.renderData(this.state.data)}
      </div>
    )
  }
}

export default Team
import React, { Component } from 'react'


const URL = 'http://localhost:3004/teams'

class Pool extends Component {
  state = { 
    poolTeams: []
   }

  fetchPoolData = () => {
    fetch(`${URL}?poll=true&_sort=count&_order=desc`, {method: 'GET'})
    .then(res => res.json())
    .then(json => {
      this.setState({
        poolTeams: json
      })
    })
  }

  componentDidMount(){
    this.fetchPoolData();
  }

  onClickHandler = (count, id) => {
    fetch(`${URL}/${id}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({count: count + 1})
    }).then(() => {
      this.fetchPoolData()
    })
  }

  renderPool = () => {
    const position = ['1ST', '2ND', '3RD']
    if(this.state.poolTeams){
      return this.state.poolTeams.map((team, index) => {
        return (
          <div className='pool-team' key={team.id}>
            <img alt={team.name} src={`/images/teams/${team.logo}`} 
            onClick={() => { this.onClickHandler(team.count, team.id) }}/>
            <h4>{position[index]}</h4>
            <div>{team.count}</div>
          </div>
        )
      })
    }
  }
  
  render() {
    return (
      <div className='pool'>
        <h3>Who will be the next champion?</h3>
        <div className='pool-container'>
          {this.renderPool()}
        </div>
      </div>
    );
  }
}

export default Pool
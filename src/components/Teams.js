import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const URL = 'http://localhost:3004/teams'

class Teams extends Component {
  state = { 
    teams: [],
    filtered: [],
    keyword: ''
  }

  componentDidMount(){
    fetch(URL,{method: 'GET'})
    .then(res => res.json())
    .then(json => {
      this.setState({
        teams: json,
        filtered: json
      })
    })
  }

  renderTeamsTable = (teams) => {
    if(teams){
      return teams.map((team) => {
        return (
          <Link to={`/team/${team.name}`} 
            key={team.id}
            className='teams-item'>
            <img alt={team.name} src={`/images/teams/${team.logo}`}/>
            <h3>{team.name}</h3>
          </Link>
        )
      }) 
    }
  }

  handleInputChange = (e) => {
    const keyword = e.target.value
    if(keyword !== ''){
      const list = this.state.teams.filter((team) => {
        return team.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      })
      this.setState({
        filtered: list,
        keyword
      })
    }else{
      this.setState({
        filtered: this.state.teams,
        keyword
      })
    }
  }

  render() {
    return (
      <div className='teams'>
        <div className='teams-search'>
          <input type='text' placeholder='Search for a team' value={this.state.keyword} onChange={this.handleInputChange}/>
        </div>
        <div className='teams-table'>
          {this.renderTeamsTable(this.state.filtered)}   
        </div>
      </div>
    )
  }
}

export default Teams
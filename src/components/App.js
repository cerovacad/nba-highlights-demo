import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Teams from './Teams'
import Team from './Team'

class App extends Component {
  state = {  }
  render() {
    return (
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={Home}/>
            <Route exact path='/teams' component={Teams}/>
            <Route exact path='/team/:id' component={Team}/>
            <Footer />
          </div>    
        </Router>
    )
  }
}

export default App
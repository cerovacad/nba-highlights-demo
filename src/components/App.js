import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

class App extends Component {
  state = {  }
  render() {
    return (
        <Router>
          <div>
            <Header />
            <Route exac path='/' component={Home}/>
            <Footer />
          </div>    
        </Router>
    );
  }
}

export default App;
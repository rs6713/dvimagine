import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './containers/Profile'
import Welcome from './components/Welcome'
import Charities from './containers/Charities'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class App extends Component {

  render() {

    const addProfile = (props) => {
      return <Profile {...props} />
    }
    const charities = (props) => {
      return <Charities {...props} />
    }
    const welcome = (props) => {
      return <Welcome {...props} />
    }

    return (
      <div className="App">
        
        <Router>
          <div>
            <Switch>
              <Route path="/addProfile" component={addProfile}/>
              <Route path="/charities" component={charities}/>
              <Route path="/" component={welcome}/>
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;

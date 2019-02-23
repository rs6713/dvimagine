import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './containers/Profile'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


class App extends Component {

  render() {

    const addProfile = (props) => {
      return <Profile {...props} />
    }

    return (
      <div className="App">
        
        <Router>
          <div>
            <Switch>
              <Route path="/addProfile" component={addProfile}/>
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;

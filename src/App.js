import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './containers/Profile'
import ProfileOverview from './containers/ProfileOverview'
import Welcome from './components/Welcome'
import Summary from './containers/Analytics'
import Chatbot from './containers/Chatbot'
import Charities from './containers/Options'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSmileBeam, faSmile, faSadCry, faFrown, faMeh } from '@fortawesome/fontawesome-free-solid'
import {faSmileBeam, faSmile, faSadCry, faFrown, faMeh, faTimes, faAngleUp } from '@fortawesome/free-solid-svg-icons'


library.add(faSmileBeam, faSmile, faSadCry, faFrown, faMeh, faTimes, faAngleUp)

class App extends Component {
  render() {
    const summary = (props) => {
      return <Summary {...props} />
    }
    const addProfile = (props) => {
      return <Profile {...props} />
    }
    const charities = (props) => {
      return <Charities {...props} />
    }
    const welcome = (props) => {
      return <Welcome {...props} />
    }
    const chatbot = (props) => {
      return <Chatbot {...props} />
    }
    const profileOverview = (props) => {
      return <ProfileOverview {...props} />
    }

    return (
      <div className="App">
        
        <Router>
          <div>
            <Switch>
              <Route path="/addProfile" component={addProfile}/>
              <Route path="/charities" component={charities}/>
              <Route path="/chatbot" component={chatbot}/>
              <Route path="/profile" component={profileOverview}/>
              <Route path="/summary" component={summary}/>
              <Route path="/" component={welcome}/>
            </Switch>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;

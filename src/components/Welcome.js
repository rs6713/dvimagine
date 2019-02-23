import React, { Component } from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
import logo from '../assets/favicon.ico'

function Welcome(props){

  
  return (
    <div class="welcome">
        <img src={logo}/>
        <div>

          <div>Have you had a recent falling out at home?</div>
          <div>Do you need to find somewhere to stay tonight?</div>
          <div>Are you experiencing difficulty aquiring a job?</div>
          <div>Find the services you need locally and quickly</div>
        </div>
        <div class="button">Connect to Help</div>
      
      
    </div>
  );


}

export default Welcome;
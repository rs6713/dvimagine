import React, { Component } from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
import logo from '../assets/favicon.ico'

var chat=[
  {"Question":"Welcome! I am here to help you access and find the resources you need, but first I need to ask you a couple of questions, don't worry all this information will be confidential and only shared when you conset. Sound good?", "Anwers":["Yes", "Not sure, I want to know more about this service."]}
];

class Chatbot extends Component{

  constructor(props){
    super(props)
    this.state={
      index:0
    }
  }
  render(){
    return (
      <div class="chatbot">
        <div id="chat">
          
        </div>
      </div>
    );
  }


}

export default Chatbot;
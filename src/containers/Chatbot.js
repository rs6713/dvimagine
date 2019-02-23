import React, { Component } from 'react';
import '../App.scss';
import {Link} from 'react-router-dom'
import logo from '../assets/favicon.ico'
import Slider from '@material-ui/lab/Slider';
import CircularProgress from '@material-ui/core/CircularProgress';
import map from '../assets/map.PNG'
import nightstop from '../assets/nightstop.png'
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pagelogo from '../assets/longlogo.png'



var chat=[
  {
    "type":"start",
    "Question":"Welcome! I am here to help you access and find the resources you need, but first I need to ask you a couple of questions. Sound good?", 
    "Answers":["Yes", "Not sure, I want to know more about this service."]
  },
  {
    "type":"housing",
    "Question":"How would you describe your current housing situation?", 
    "Answers":[
      "I am in need of emergency accommodation for tonight",
      "Living in stable family environment",
      "Tense, and the situation is deteriorating in my current residence",
      "Independent living - Stable",
      "Struggling to meet rent obligations"
    ],
  }, 
  {
    "type":"mental",
    "Question":"How would you rate your mental wellbeing, 1 being in urgent need of support and 10 being phenomenal?", 
    "Answers":[0,10],
    "answertype":"slider"
  }, 

  {
    type:"job",
    Question: "What is your current job status?",
    Answers: ["I have lost my job recently", "I have a secure job", "Studying", "Searching"]
  },
  {
    type:"drugs",
    Question: "What is your current relationship with alcohol/drugs? ",
    Answers:["I am currently addicted to an illegal substance and seeking assistance", "I am sober", "I have no history of addiction", "I am a casual user"]
  }
   
];

var results=[
  {
    image:nightstop,
    name: "NightStop",
    bio:"Nightstop provides emergency overnight accommodation for young homeless people who are facing a night on the streets or sleeping in an unsafe place.",
    body:
    <div class="resultsBody">
      <h5>Volunteer hosts, who are ordinary members of the community, open their homes to young people aged from 16 to 25 years, offering:</h5>
      <ul>
        <li>A private spare room</li>
        <li>A hot meal</li>
        <li>A shower</li>
        <li>Laundry facilities</li>
        <li>A listening ear</li>
      </ul>
    </div>,
    contact:
    <div class="contact">
      <div>
        <div>
          <h3> Your nearest service is <a href=""> <b>Nightstop London</b></a></h3> 
          <p>Click to get more information about the services they offer</p>
          <h3>You can email them on: <a href=""> <b>tj.nicholls@hyh.org.uk</b></a></h3>
          <p>Click to generate a template email from this discussion.</p>
          <h3> Or call them on: <b>03333 202 384</b> </h3>
          <p>Tell them your username, to provide them your information automatically</p>
        </div>
        <div>Alternatively call the Runaway Helpline for advice 24 hours a day free on <b>116 000</b></div>
    
        <img src={map}/>
      </div> 
      </div>,
    why: "Homelessness isn't just a matter of sleeping on the streets, but anyone who is lacking a permanent residence. You are not alone, nightStop helped 1,403 young people find a safe place to sleep in 2017 alone."
  }

]

class Chatbot extends Component{
  messagesEnd=null;
  resultsEnd=null;
  constructor(props){
    super(props)
    this.state={
      index:0,
      temp:0,
      profile:{},
      result:null,//null,
      top:"100%",
      transform:"translateY(-2.5em)"
    }
    this.revealResult=this.revealResult.bind(this)
    
  }
  revealResult(){
    this.setState({
      result:results[0],
      index: this.state.index+1
    }, function(){
      var offset=$('#resultContainer').offsetTop
      this.resultsEnd.scrollIntoView({ behavior: "smooth" });
    }.bind(this))
  }
  selectAnswer(type, answer){
    return function(){

      
        this.setState({
          index: this.state.index+1,
          profile:{...this.state.profile, [type]: answer}
        }, function(){
          this.messagesEnd.scrollIntoView({ behavior: "smooth" });
          if(this.state.index==chat.length){
            setTimeout(this.revealResult, 2000)
          }
        })
      
      
    }.bind(this)
  }
  emotions=[
    <FontAwesomeIcon icon="sad-cry" />,
    <FontAwesomeIcon icon="frown" />,
    <FontAwesomeIcon icon="meh" />,
    <FontAwesomeIcon icon="smile" />,
    <FontAwesomeIcon icon="smile-beam" />
  ]
  
  
  
  render(){
    var chatbox=chat.slice(0,this.state.index+1)
    console.log(this.state.profile)
    return (
      <div class="chatbot">
        
        <div id="chatContainer" 
       
        style={{top: this.state.top,  transform:this.state.transform}}>
        <div id="chatheader"
         onClick={function(){
          console.log("hi") 
          this.setState({
          top:0, transform:"none"
        })}.bind(this)}>
        <img src={pagelogo} />
        <FontAwesomeIcon icon="times" />
        </div>
        <div id="chat">
          {chatbox.map((qa,i)=>{
            return(
              <div>
                  <div class="question">
                    {qa["Question"]}
                  </div>
                  {
                    !qa["answertype"] &&
                  <div className={"answer "+ (i==this.state.index?"active":"")}>
                    {
                      qa["Answers"].map(an=>
                        <div className={an==this.state.profile[qa["type"]]? "selected":""}
                          onClick={this.selectAnswer(qa["type"], an)}
                        >{an} </div>
                      )
                    }
                  </div>
                  }
                  {
                    qa["answertype"]=="slider" &&
                    <Slider 
                    thumb={this.emotions[parseInt(this.state.temp/2.1)]}
                    onChange={function(event,value){this.setState({ "temp":value });}.bind(this)}
                    step={1}
                    value={this.state.temp} min={qa["Answers"][0]} max={qa["Answers"][1]} onDragEnd={this.selectAnswer(qa["type"], this.state.temp)}/>
                    
                  }
                  <div style={{ float:"left", clear: "both" }}
                      ref={(el) => { this.messagesEnd = el; }}>
                  </div>


              </div>)
          })}

          {
            (chat.length==this.state.index)  &&
            <div class="submit">
              Okay, Great! Fetching results now... <br/><br />
              <CircularProgress />
            </div>
          }
          {this.state.result &&
            <div id="resultContainer">
        
              
              <h3>Your temporary username: 65kl12</h3>
              <h2>Our Recommendation</h2>
              <div id="result">
                <div id="result-header"> 
                  <div>
                    <h3>{this.state.result.name}</h3>
                    <p>{this.state.result.bio}</p>
                  </div>
                  <img src={this.state.result.image}/>
                </div>
                {this.state.result.body}
                <div style={{ float:"left", clear: "both" }}
                      ref={(el) => { this.resultsEnd = el; }}>
                  </div>
                {this.state.result.contact}

              </div>
              
            </div>
          }
        </div>
        </div>
      </div>
    );
  }


}

export default Chatbot;
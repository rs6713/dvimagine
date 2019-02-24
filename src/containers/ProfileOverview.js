import React, { Component } from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import joe from '../assets/joe.jpg'
import nightstop from '../assets/nightstop.png'
import depaul from '../assets/depaul.png'
import map from '../assets/map.PNG'
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

/*
name, image, needs checkboxes?, phone, email, address, bio, username

Do user submission as described, 
Then have histories/summary page for user with bio, add New Meeting Log button
direct to Resources button.
RESULTS- venn diagram, job status, notable incidents over time.
Meeting- targets, dates, todo, struggles, current location
- looks at users id, adds edit as user with charity

Charity page draw up?
PDF PRINT BUTTON FOR LOGS (overview, vs most recent log, vs charity resources)
generate results button (until then faded grey) for severity and suggested charities

*/
const ACCOMODATION="Accommodation"
const ADDICTIONS="Addictions"
const EMPLOYMENT="Employment"
const MENTALHEALTH="Mental Health"
const RELATIONSHIPS="Relationships"

var charities=[
  {
    name: "DePaul",
    bio:"Provide emergency accommodation, supported housing and other services to help people rebuild their lives.Their mission is to end homelessness and change the lives of people affected by it. ",
    image: depaul,
    needs:[]
  },
  {
    needs:[],
    image: nightstop,
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
      </div>
    
  }
]




class ProfileOverview extends Component {

  constructor(props){
    super(props)
    this.state={
      username:"bs6713",
      firstname:"John",
      lastname:"Smith",
      dob: "11/12/1997",
      required:["firstname","lastname", "email", "username"],
      image:joe ,
      phone: "07804659830",
      email: "john.smith@outlook.com",
      bio:"",
      severity:9,
      height:{profile: "auto", questions:"auto", charities:"auto", resources:0},
      results:charities,
      stages:[
        "John Joined",
        "Summary Captured",
        "Charity Referral",
        "Charity Review"
      ],
      currStage:0,
      mode: "normal"
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(field,e){
    var value = e.target.value;

    if(field=="evergreen"){
      value=e.target.checked
    }


    this.setState({
      [field]: value
    })
  }

  render() {
    return (
      <div className="Page profileOverview">
        
        <div className="section" id="user">
          <div className="sectionHeader">
            <div>PERSONAL DETAILS</div>
            <div>STATUS</div>
            <FontAwesomeIcon icon="angle-up"
              onClick={function(){
                this.setState({
                  height:{...this.state.height, profile: this.state.height["profile"]?0:"auto"   }
                })
              }.bind(this)}
              style={{transform: this.state.height["profile"]? "rotateZ(179deg) translateY(50%)": ""}}
            />
          </div>
          <div className="sectionBody"
            style={{height: this.state.height["profile"], padding:this.state.height["profile"]? "2em": "0em 2em" }}>
              <div id="profile">
                <div>
                  <img src={this.state.image} />
                </div>
                <div>
                  <p><b>Name:</b> {this.state.firstname} {this.state.lastname}</p>
                  <p><b>Username:</b> {this.state.username}</p>
                  <p><b>DOB:</b> {this.state.dob}</p>
                  <p><b>Phone:</b> {this.state.phone}</p>
                  <p><b>Email:</b> {this.state.email}</p>

                </div>
              </div>
              <div id="status">
                <div>
                {this.state.stages.map((s,i)=><div
                  style={{transform: this.state.currStage==i? "scale(1.5)":""}}
                ></div>)}
                </div>
                <div>
                  {this.state.stages.map((s,i)=><div
                  >{s}</div>)}
                </div>
                <div></div>
              </div>

          </div>
        </div>

        <div className="section" id="questions">
          <div className="sectionHeader">
            <div>SUGGESTED CATEGORIES BASED ON LOCATION</div>
            <FontAwesomeIcon icon="angle-up"
              onClick={function(){
                this.setState({
                  height:{...this.state.height, questions: this.state.height["questions"]?0:"auto"   }
                })
              }.bind(this)}
              style={{transform: this.state.height["questions"]? "rotateZ(179deg) translateY(50%)": ""}}
            />
          </div>
          <div className="sectionBody"
            style={{height: this.state.height["questions"], padding:this.state.height["questions"]? "2em": "0em 2em" }}>
                  <div class="submitContainer">
                  <Link to="/summary" >
                      <div 
                        className="submit"
                      >
                        Submit Log
                      </div>
                    </Link>
                    <div 
                      className="submit"
                      onClick={function(){
                        this.setState({mode:"submit"})
                        setTimeout(
                          function(){
                            this.setState({
                              height: {...this.state.height, resources:"auto"},
                              currStage:1,
                              mode:"normal"
                            })
                          }.bind(this)
                          , 1000)
                      }.bind(this)}
                    >
                      Request Resources
                    </div>

                    <CircularProgress style={{display: this.state.mode=="submit"?"block":"none"}}/>
                  </div>

          </div>
        </div>

        <div className="section" id="severity" >
          <div className="sectionHeader">
            <div>SEVERITY  {this.state.severity} (high)</div>
            <div>
              <span>Scale</span>
              <span>
                <span><p>1</p></span>
                <span></span>
                <span><p>5</p></span>
                <span></span>
                <span><p>10</p></span>
              </span>
            </div>
          </div>
        </div>

        <div className="section" id="resources">
          <div className="sectionHeader">
            <div>SUGGESTED RESOURCES</div>
            <FontAwesomeIcon icon="angle-up"
              onClick={function(){
                this.setState({
                  height:{...this.state.height, resources: this.state.height["resources"]?0:"auto"   }
                })
              }.bind(this)}
              style={{transform: this.state.height["resources"]? "rotateZ(179deg) translateY(50%)": ""}}
            />
          </div>
          <div className="sectionBody"
            style={{height: this.state.height["resources"], padding:this.state.height["resources"]? "2em": "0em 2em" }}>
              {
                this.state.results.map(res=>
                  <div id="result">
                    <div id="result-header"> 
                      <div>
                        <h4>{res.name}</h4>
                        <p>{res.bio} </p>
                      </div>
                      <img src={res.image}/>
                    </div>
                    <div className="refer" onClick={
                      function(){
                        this.setState({
                          currStage:2,
                        })
                      }.bind(this)
                    }>
                      Refer
                    </div>
                  </div>
                  )
              }
          </div>
        </div>



      </div>
    );
  }
}

export default ProfileOverview;
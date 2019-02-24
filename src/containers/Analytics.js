import React, { Component } from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import joe from '../assets/joe.jpg'
import nightstop from '../assets/nightstop.png'
import map from '../assets/map.PNG'
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
    bio:"",
    image: nightstop,
    needs:[]
  },
  {
    needs:[],
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
      </div>
    
  }
]




class Analytics extends Component {

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
      currStage:2,
      mode: "normal",
      tab:"history"
    }
    this.handleChange=this.handleChange.bind(this)
    this.toggleDataSeries= this.toggleDataSeries.bind(this)
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
  toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}

  render() {

    var options={
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
      text: "Wellbeing Tracking"
      },
      axisY: {
      title: "Self-Eval Score"
      },
      toolTip: {
      shared: true
      },
      legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      cursor: "pointer",
      itemclick: this.toggleDataSeries
      },
      data: [
      {
        type: "stackedArea",
        name: "Emotional & Mental Health",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: [
          {x: new Date(2017, 5), y: 2},
          {x: new Date(2018, 8), y: 5},
          {x: new Date(2018, 11), y: 4},
          {x: new Date(2019, 2), y: 8}
        ]
      },
      {
        type: "stackedArea",
        name: "Physical Health",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: [
          {x: new Date(2017, 5), y: 7},
          {x: new Date(2018, 8), y: 8},
          {x: new Date(2018, 11), y: 5},
          {x: new Date(2019, 2), y: 8}
        ]
      },
      {
        type: "stackedArea",
        name: "Social Networks & Relationships",
        showInLegend: true,
        xValueFormatString: "YYYY",
        dataPoints: [
          {x: new Date(2017, 5), y: 2},
          {x: new Date(2018, 8), y: 5},
          {x: new Date(2018, 11), y: 5},
          {x: new Date(2019, 2), y: 8}
        ]
      }
    ]
    };




    return (
      <div className="Page summaryOverview">
      
      <div className="section" id="severity2" >
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

        <div className="section" id="summary">
          <div className="sectionHeader">
            <div
              class={this.state.tab=="history"? "selected":"notselected"}
              onClick={function(){
                this.setState({
                  tab:"history"
                })
              }.bind(this)}
            >HISTORY LOGS</div>
            <div
            class={this.state.tab=="summary"? "selected":"notselected"}
            onClick={function(){
              this.setState({
                tab:"summary"
              })
            }.bind(this)}
            >SUMMARY</div>
            <FontAwesomeIcon icon="angle-up"
              onClick={function(){
                this.setState({
                  height:{...this.state.height, questions: this.state.height["questions"]?0:"auto"   }
                })
              }.bind(this)}
              style={{transform: this.state.height["questions"]? "rotateZ(179deg) translateY(50%)": ""}}
            />
          </div>
          {this.state.tab=="summary" &&
          <div className="sectionBody"
            style={{height: this.state.height["questions"], padding:this.state.height["questions"]? "2em": "0em 2em" }}>
              <CanvasJSChart options = {options}
                onRef={ref => this.chart = ref}
              />

          </div>
          }
          {this.state.tab=="history"&&

            <div className="sectionBody"
            style={{height: this.state.height["questions"], padding:this.state.height["questions"]? "2em": "0em 2em" }}>


            </div>
        }
        </div>


        



      </div>
    );
  }
}

export default Analytics;
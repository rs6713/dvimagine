import React, { Component } from 'react';
import '../App.scss';

/*
name, image, needs checkboxes?, phone, email, address, bio, username


*/

class Profile extends Component {

  constructor(props){
    super(props)
    this.state={
      username:"",
      firstname:"",
      lastname:"",
      required:["firstname","lastname", "email", "username"],
      needs:[],
      image:null,
      phone:null,
      email:null,
      bio:"",
      orgs:["Do you spend too much money?", "Org2", "Org3"],
      evergreen:false

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
      <div className="Page addProfile">

        <div id="headerBackground">
          <h1>
            Profile Editor
          </h1>    
        </div>

        <div id="subHeaderBackground">
          <h2>
            Client Name
          </h2> 
        </div>

        
          <div id="bodyBackground">
            <div id="grid">
              <div id="leftBox">
                <h7>
                  Client Overview                          
                </h7>    
              </div>

              <div id="textBox">
                <h7>
                  Slightly depressed, left home when he was 15, has ambitions to study software engineering at university. Some more brief and sharp statements to give a feel for the client and an overview of their background and situation. May include possible goals and objectives
                </h7>        
            </div>
            </div>


          <div>
            <h1></h1>
          </div>


          <div id="grid">
          <div id="textBox">
            <h7>
              Place slider bar inside the cube
            </h7>         
          </div>

          <div>
            <h1></h1>
          </div>
            <div id="textBox">
              <h5 className="uppercase">First Name</h5>
              <input required type="text" className="" placeholder="What should we call you?" value={this.state.firstname} onChange={(e) => this.handleChange('firstname',e)} />
            </div>         
            <div>
              <h5 className="uppercase">Example</h5>
              <div>
                <select value={this.state.org} onChange={ (e)=>this.handleChange('X',e)}>
                  <option value="" disabled selected>Select X</option>
                    {this.state.orgs.map(org=>
                      <option value={org}>{org}</option>
                    )}
                </select>
              </div>
            </div>
              <div> 
                <h5 className="uppercase">Is this is a checkbox?</h5>
                  <div id="textBox">
                    <div id="checks">
                      <h4>
                        The First Tick Option
                      </h4>
                      <input type="checkbox" className="pt-input"  value={this.state.evergreen} onChange={(e) => this.handleChange('evergreen',e)} />
                    </div> 
                    <div id="checks">
                      <h4>
                        The Second Tick Option
                      </h4>
                      <input type="checkbox" className="pt-input"  value={this.state.evergreen} onChange={(e) => this.handleChange('evergreen',e)} />
                    </div>
                  </div>                            
              </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
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
      orgs:["Org1", "Org2", "Org3"],
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
        <h5>
          I am a user profile
          </h5>
        <div>
          <h5 className="uppercase">First Name</h5>
          <input required type="text" className="" placeholder="First Name" value={this.state.firstname} onChange={(e) => this.handleChange('firstname',e)} />
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
                            <h5 className="uppercase">Evergreen?</h5>
                            <input type="checkbox" className="pt-input"  value={this.state.evergreen} onChange={(e) => this.handleChange('evergreen',e)} />
                            
                          </div>


      </div>
    );
  }
}

export default Profile;
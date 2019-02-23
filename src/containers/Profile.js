import React, { Component } from 'react';
import '../App.css';

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
      bio:""

    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(field,e){
    var value = e.target.value;
    this.setState({
      [field]: value
    })
  }

  render() {
    return (
      <div className="Page">
        <h5>
          I am a user profile
          </h5>
        <h5 className="uppercase">First Name</h5>
        <input required type="text" className="" placeholder="First Name" value={this.state.firstname} onChange={(e) => this.handleChange('firstname',e)} />
                    
      </div>
    );
  }
}

export default Profile;
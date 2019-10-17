import React, { Component } from 'react'
import "../css/userForm.css"
import {userInformationAction} from "../redux/actions/userFormActions"
import { connect } from 'react-redux';

export class UserForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      Username:"",
      Password:"",
    };
    this.updateStateValues = this.updateStateValues.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
  submitLogin(){
    const userName = this.state.Username
    const passWord = this.state.Password
    if(userName === "" || passWord === ""){
      window.alert("Empty user and pass!")
      return;
    }
    this.props.login({userName:userName,passWord:passWord})
    
  }
  updateStateValues(e,inputType){
    if(inputType === "u"){
      this.setState({
        Username:e.target.value,
      })
    }else{
      this.setState({
        Password:e.target.value,
      }) 
    }
  }
  render() {
    console.log(this.props)
    if(this.props.loggedIn === "YES"){
      return(
        <div>YOOOO</div>
      )
    }
    return (
      <div className="container">
          
          <div className="loginRegContainer">
            <label>
              Username:
              <input type="text" name="name" onChange={e => this.updateStateValues(e,"u")}/>
            </label>
            <label>
              Password:
              <input type="password" className="password" name="password"onChange={e => this.updateStateValues(e,"p")}/>
            </label>
            <label>
              <input className="button" type="submit" value="Login!" onClick={this.submitLogin}/>
            </label>          
          </div>
          
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.userInformationReducer.loggedIn,
})
const mapDispatchToProps = dispatch =>({
  
    login: (data) => {
      dispatch(userInformationAction(data));
    }
    
})


export default connect(mapStateToProps,mapDispatchToProps)(UserForm)

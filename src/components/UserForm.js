import React, { useState } from 'react'
import {userInformationAction} from "../redux/actions/userFormActions"
import { useSelector, useDispatch } from 'react-redux';

import "../css/userForm.css"

const UserForm = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const loggedIn = useSelector(state => state.userInformationReducer.loggedIn);
  const dispatch = useDispatch();

  const updateUserPass = (e,inputType) => {
    inputType === 'u' ? setUserName(e.target.value) : setPassword(e.target.value);
  }

  const submitLogin = () => {
    if(username === "" || password === ""){
      window.alert("Empty user and pass!")
      return;
    }
    dispatch(userInformationAction({userName: username, passWord: password}));
  }

  console.log(loggedIn);
  if(loggedIn === "YES"){
    return(
      <div>YOOOO</div>
    )
  }

  return (
    <div className="container">
        
        <div className="loginRegContainer">
          <label>
            Username:
            <input type="text" name="name" onChange={e => updateUserPass(e, 'u')}/>
          </label>
          <label>
            Password:
            <input type="password" className="password" name="password" onChange={e => updateUserPass(e, 'p')}/>
          </label>
          <label>
            <input className="button" type="submit" value="Login!" onClick={() => submitLogin()}/>
          </label>          
        </div>
        
    </div>
  )
}

export default UserForm;
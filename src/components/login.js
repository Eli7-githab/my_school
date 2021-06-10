import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { loginToServer } from '../services/login';
import '../style/login.css';
const Login = () => {

  let history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = async (userName, password) => {
    let res = '';
    res = await loginToServer(userName, password);
    console.log("res11111111", res);
    if (res && res.kind) {
      history.replace(`/${res.kind}`);
      
    }
    else {
      alert("User not found😥😥!! please sign up.")
    }
  }
  const forgotPassword = () => {
    history.replace("/forgotPassword");
  }

  const goToSignup = () => {
    history.replace("/signup");
  }

  return (<div className="login">
    <img className="logo" src={"/images/logo.png"} />
    <img className="welcome" src={"/images/welcome.png"} />
    <img className="Profil" src={"/images/profil.png"} />
    <div className="group4" >
      <div >
        <input type="text" id="userName" name="userName"
          placeholder=":הכנס שם משתמש" className="name"
          value={userName} onChange={(e) => {
            console.log(e.target.value)
            setUserName(e.target.value)
          }} />
      </div>
    </div>
    <div className="group3" >
      <input type="password" id="password" name="password"
        placeholder=":הכנס סיסמא" className="name"
        value={password} onChange={(e) => {
          console.log(e.target.value)
          setPassword(e.target.value)
        }} />
    </div>

    <div className="group2">
      <button className="button" onClick={() => login(userName, password)}>  התחברות   </button>
    </div>

    <div>
      <button className="forgotPassword" onClick={() => forgotPassword()}>  שכחת סיסמא?   </button>
    </div>

    <div>
      <button className="goToSignup" onClick={() => goToSignup()}>  אין לך חשבון הרשם   </button>
    </div>
  </div>
  );

}

export default Login;
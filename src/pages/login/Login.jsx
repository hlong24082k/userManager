import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { emailValidator, passwordValidator } from './regexValidator';
import "./Login.css"

import profile from "../../images/Logo_dhbkdn-min.jpg";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import { CallMergeTwoTone } from "@material-ui/icons";

export default function Login(){
    const history = useNavigate();
    const [input, setInput] = useState({
      name:'',
      pass:''
    })
    const [token, setToken] = useState([]);
    const [errorMessage, seterrorMessage]=React.useState('');
    const [successMessage, setsuccessMessage]=React.useState('');

    const url = "https://6264b15da55d5055be4ab0c6.mockapi.io/login"

    useEffect(()=>{
      fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function(data){
        setToken(data)
        // console.log(data)
      })
    },[])

    function handleChange(e){
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
      // console.log(input)
    }

    useEffect(()=>{
      if(localStorage.getItem('token'))
        history('/home')
    },[])

    

    function login(e){
      e.preventDefault();
      if (input.name == token[0].Username && input.pass == token[0].Password){
        history('/home')
        localStorage.setItem('token', true)
      } else{
        alert("Vui long nhap lai")
        setInput({
          ...input,
          name: '',
          pass: ''
        })
        console.log(input)
      }

      
    }
    return(
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile"/>
                </div>
              </div>
            <div>
          <h1>BK Technology</h1>
          <div>
            <img src={email} alt="email" className="email"/>
            <input id="input" type="text" placeholder="Username" className="name" name="name" onChange={handleChange} value={input.name}/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input id="input" type="password" placeholder="Password" className="name" name="pass" onChange={handleChange} value={input.pass}/>
          </div>
          <div className="login-button">
            <button type="button" onClick={login} id="button">Log in</button>
          </div>
        </div>
      </div>
     </div>
    </div>
    )
}
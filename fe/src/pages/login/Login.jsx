import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import './Login.css';


export default function Login() {
    const history = useNavigate();
    const [values, setValues] = useState({
        "username": "",
        "password": ""
    })
    const [errorMessage, setErrorMessage] = useState("")

 
    function isEmail(emailValue) {
        const emailRegex = /^[^\s@]+@[^\s@]+$/;
        return emailRegex.test(emailValue)
    }

    function isPass(passValue) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(passValue);
    }

    function handleChange(e) {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
    }

    useEffect(()=>{
      if(localStorage.getItem('token') == "true")
        history('/home')
    },[])

    async function login(e) {
        e.preventDefault();
        console.log(values)
        if (!isEmail(values.username) || !isPass(values.password)) {
            setErrorMessage("Wrong Email or Password Format!!!")
        }
        
        const response = await fetch("http://localhost:5051/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
                },
            body: JSON.stringify(values)
        })
        const result = await response.json();
        if (result.success) {
            history('/home');
            localStorage.setItem('token', "true")
        } else {
            setErrorMessage("Please re-enter your account")
            setValues({
                ...values,
                "username": "",
                "password": ""
            })
        }
    }

    return(
        <div className="main">
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Login</h2>
                    <div className="form">
                        <div className="input-box">
                            <IoMdMail className="icon"/>
                            <input type="text" 
                                required 
                                name="username"
                                onChange={handleChange}
                                value={values.username}
                            />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <FaLock className="icon"/>
                            <input type="password"    
                                required 
                                name="password"
                                onChange={handleChange}
                                value={values.password} 
                            />
                            <label>Password</label>
                        </div>
                        <p className="error">{errorMessage}</p>
                        <div className="savepass">
                            <label><input type="checkbox" />Save password</label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn" onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

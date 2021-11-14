import axios from "axios";
import React, { Component, useState } from "react";
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
///import './style.css'
function Signup() {
    const [user,setUser] = useState({
        username:'',password:'',first_name:'',last_name:''
    })
    const onChangeInpute = (e)=>{
        
        const {name,value}= e.target;
        setUser({...user,[name]:value})
        
    }
    const SignupSubmit=async(e)=>{
        e.preventDefault()
        try{
            console.log({...user})
            await axios.post('http://127.0.0.1:8000/api/register/',{...user})
            window.location.href = "/";
        }
        catch(err){
            alert(err.response.data.msg)
        }
    }
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={SignupSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input name="first_name" type="text" className="form-control" placeholder="First name" value={user.first_name} onChange={onChangeInpute} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input name="last_name" type="text" className="form-control" placeholder="Last name" value={user.last_name} onChange={onChangeInpute}/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input name="username" type="text" className="form-control" placeholder="Enter email" value={user.email} onChange={onChangeInpute}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" value={user.password} onChange={onChangeInpute}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
            </div>
        );
    }

export default Signup;

import React, { Component, useState } from "react";
///import './style.css'
function Signup() {
    const [user,setUser] = useState({
        email:'',password:'',first_name:'',last_name:''
    })
    const onChangeInpute = (e)=>{
        
        const {name,value}= e.target;
        setUser({...user,[name]:value})
        
    }
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
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
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Enter email" value={user.email} onChange={onChangeInpute}/>
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

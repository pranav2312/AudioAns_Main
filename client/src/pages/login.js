import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalState } from "../GlobalState";
import './style.css'
function Login() {
    const store = useContext(GlobalState)
    const [token,setToken] = store.token
    const [refresh,setRefresh] = store.refresh
    const [user, setUser] = useState({
        username: '', password: ''
    })
    const onChangeInpute = (e) => {

        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const loginSubmit=async(e)=>{
        e.preventDefault()
        try{
            console.log({...user})
            const res = await axios.post('http://127.0.0.1:8000/api/token/',{...user})
            setToken(res.data.access)
            setRefresh(res.data.refresh)
            console.log(res.data)
           localStorage.setItem('firstlogin',true)
           localStorage.setItem('refresh',res.data.refresh)
            window.location.href = "/questions";
        }
        catch(err){
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
        <form onSubmit={loginSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Username</label>
                <input name="username" type="text" className="form-control" placeholder="Enter email" value={user.username} onChange={onChangeInpute} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control" placeholder="Enter password" onChange={onChangeInpute} value={user.password} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
        </div>
        </div>
    );
}

export default Login;
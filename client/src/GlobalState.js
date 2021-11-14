import axios from 'axios'
import React,{createContext,useEffect,useState} from 'react'

import UserApi from './api/Userapi'

export const GlobalState = createContext()

export const DataProvider = ({children})=>{
    const [token,setToken] = useState(false)
    const [refresh,setRefresh] = useState('')
    useEffect(()=>{
        const firstlogin = localStorage.getItem('firstlogin')
        const refreshdata = localStorage.getItem('refresh')
 
        if(firstlogin){
        const refreshToken = async()=>{
            const res = await axios.post('http://127.0.0.1:8000/api/token/refresh/',{refresh:refreshdata})
            //console.log(token)
            //console.log(res)
            setRefresh(refreshdata)
            setToken(res.data.access)
            console.log({token})
            setTimeout(()=>{
                refreshToken()
            },10*60*1000)
            //localStorage.removeItem('refresh')
        }
        refreshToken()
        }
    },[])
    const state= {
        refresh : [refresh,setRefresh],
        token : [token,setToken],
        UserApi : UserApi(token),
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
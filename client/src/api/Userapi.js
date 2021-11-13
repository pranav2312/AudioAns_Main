import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserApi(token) {

    const [callback,setCallback] = useState(false)
    useEffect(()=>{
        // if(token){
        //     const getUser = async()=>{
        //         try{    
        //             const res = await axios.get('/user/infor',{
        //                 headers:{Authorization:token}
        //             })
       
              
        //         }
        //         catch(err){
        //             alert({msg:err.message})
        //         }
        //     }
        //     getUser()
        // }
    },[token])

      
    return {
        callback:[callback,setCallback]
    }
}

export default UserApi

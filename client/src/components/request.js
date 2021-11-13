import axios from 'axios'
import { useContext } from 'react'
export const getQuestionList = async(token) => {
    return await axios
        .get(`http://127.0.0.1:8000/api/question/`,
            {
                headers:{Authorization:`Bearer ${token[0]}`}
            })
        .then(res => res)
        .catch(err => { throw err })
}

export const getQuestion = async(id,token) => {
    return await axios
        .get(`http://127.0.0.1:8000/api/question/${id}/`,{
            headers:{Authorization:`Bearer ${token[0]}`}
        })
        .then(res => res)
        .catch(err => { throw err })
}

export const saveAnswer = async(quesId, body,token) => {
   
    return await axios    
        .patch(`http://127.0.0.1:8000/api/question/${quesId}/`, body,{
            headers:{Authorization:`Bearer ${token[0]}`}
            
        })
        .then(res => res)
        .catch(err => { throw err })
}

export const savNewQuestion = async(body,token) => {
    return await axios
        .post(`http://127.0.0.1:8000/api/question/`,body, {
            headers:{Authorization:`Bearer ${token[0]}`},
        })
        .then(res => res)
        .catch(err => { throw err })
}
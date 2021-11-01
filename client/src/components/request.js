import axios from 'axios'

export const getQuestionList = () => {
    return axios
        .get(`http://127.0.0.1:8000/api/question/`)
        .then(res => res)
        .catch(err => { throw err })
}

export const getQuestion = (id) => {
    return axios
        .get(`http://127.0.0.1:8000/api/question/${id}/`)
        .then(res => res)
        .catch(err => { throw err })
}

export const saveAnswer = (quesId, body) => {
    return axios    
        .patch(`http://127.0.0.1:8000/api/question/${quesId}/`, body)
        .then(res => res)
        .catch(err => { throw err })
}

export const savNewQuestion = (body) => {
    return axios
        .post(`http://127.0.0.1:8000/api/question/`, body)
        .then(res => res)
        .catch(err => { throw err })
}
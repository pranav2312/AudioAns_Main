import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalState'
import { getQuestionList } from '../request'
import ListItem from './ListItem/ListItem'
import './style.css'

function QuestionList() {
    const store = useContext(GlobalState)
    const token = store.token
    const initState = {
        loading: true,
        questions: []
    }

    // STATE
    const [state, setState] = useState(initState);

    useEffect(() => {
        console.log({token})
        if(token[0]){
        getQuestionList(token)
            .then(res => {
                setState(pr => ({
                    ...pr,
                    loading: false,
                    questions: res.data
                }))
            })
            .catch(console.log)
        }
    }, [token])


    return (
        <div className="ques-list">
            <Link to="/">
                <div style={{marginBottom: '15px'}}>
                    <i className="fa fa-chevron-left"></i>
                    Home
                </div>
            </Link>
            <Link to="/new_question">
                <div style={{marginBottom: '15px'}}>
                    <i className="fa fa-chevron-right"></i>
                    Add Question
                </div>
            </Link>
            {
                state.loading
                    ? <p className="loading">Loading ...</p>
                    : (
                        state.questions.map(q => (
                            <ListItem q={q} key={q.id} />
                        ))
                    )

            }
            
        </div>
    )
}

export default QuestionList

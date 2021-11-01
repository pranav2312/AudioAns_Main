import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getQuestionList } from '../request'
import ListItem from './ListItem/ListItem'
import './style.css'

function QuestionList() {

    const initState = {
        loading: true,
        questions: []
    }

    // STATE
    const [state, setState] = useState(initState);

    useEffect(() => {
        getQuestionList()
            .then(res => {
                setState(pr => ({
                    ...pr,
                    loading: false,
                    questions: res.data
                }))
            })
            .catch(console.log)
    }, [])


    return (
        <div className="ques-list">
            <Link to="/">
                <div style={{marginBottom: '15px'}}>
                    <i className="fa fa-chevron-left"></i>
                    Home
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

import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getQuestion } from '../request'
import AnswerForm from './AnswerFrom/Form'
import dummyImg from '../Images/dummyImg.jpg'
import './style.css'


function Question() {

    const { id } = useParams()
    const initState = {
        loading: true,
        question: {}
    }

    // STATE 
    const [state, setState] = useState(initState)
    const [showQues, setShowQues] = useState(true)

    useEffect(() => {
        getQuestion(id)
            .then(res => {
                updateState(res.data)
            })
            .catch(console.log)
    }, [id])

    const updateState = (data) => {
        setState(pr => ({
            ...pr,
            loading: false,
            question: data
        }))
    }

    const handleTabChange = (clicked) => {
        const dec = (clicked === "q") ? true : false;
        setShowQues(dec);
    }

    return (
        <div className="ques-container">
            {
                state.loading
                    ? <p className='loading'>Loading...</p>
                    : (
                        <>
                            <div className="ques-col">
                                <Link to="/questions">
                                    <div className="backlink">
                                        <i className="fa fa-chevron-left"></i>
                                        Questions
                                    </div>
                                </Link>
                                <Link to="/new_question">
                                    <div className="backlink-newques">
                                        New Question
                                        <i className="fa fa-chevron-right"></i>
                                    </div>
                                </Link>
                                <div className="tabs">
                                    <p
                                        onClick={() => { handleTabChange("q") }}
                                        className={(showQues) ? `active` : ``}
                                    >
                                        Question
                                    </p>
                                    <p
                                        onClick={() => { handleTabChange("a") }}
                                        className={(!showQues) ? `active` : ``}
                                    >
                                        Answer
                                    </p>
                                </div>
                                {
                                    (showQues)
                                        ? <QuestionBody question={state.question} />
                                        : <AnswerBody question={state.question} />
                                }
                                <div className="times created_time">
                                    <p>Created: {state.question.created_at}</p>
                                </div>
                            </div>
                            <div className="ques-col">
                                <AnswerForm quesId={id} updateAnswer={updateState} />
                            </div>

                        </>
                    )
            }
        </div>
    )
}

export default Question


const QuestionBody = ({ question }) => {
    return (
        <div className="ques-body">
            {console.log(question)}
            <h2>{question.ques_text}</h2>
            <div className="ques-img">
            {
                question.ques_image
                
                ? <img src={question.ques_image} alt="ques-img" />
                : <p className="times">No image attached</p>
            }
            </div>
        </div>
    )
}

const AnswerBody = ({ question }) => {
    return (
        <div className="ans-body">
            <div className="audio-ctrl">
                <audio src={question.ans_audio ? question.ans_audio : `#`} controls />
            </div>
            <p className="ans-text">
                {question.ans_text}
            </p>
            <div className="times">
                Updated: {question.updated_at}
            </div>
        </div>
    )
}
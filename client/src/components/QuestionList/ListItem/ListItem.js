import React from 'react'
import { Link } from 'react-router-dom';
import './list-item.css'

function ListItem({ q }) {
    return (
        <Link to={`/questions/${q.id}`} >
            <div className="list-item">
                <div className="is-answered">
                {
                    (q.ans_text === "No Answer Yet!") ? `Not Answered` : `Answered`
                }
                </div>
                <div className="list-ques">
                    {q.ques_text}
                </div>
                <div className="times">
                    <span>
                        <i className="fa fa-calendar-o"></i>
                        {q.created_at.split(' ')[0]}
                    </span>
                    <span>
                        <i className="fa fa-clock-o"></i>
                        {q.created_at.split(' ')[1]}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ListItem

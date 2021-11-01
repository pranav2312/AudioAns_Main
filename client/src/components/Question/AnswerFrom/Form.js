
import React, { useState, useEffect } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import { saveAnswer } from '../../request'
import './form.css';
const Mp3Recorder = new MicRecorder({ bitRate: 128 });


const AnswerForm = ({ quesId, updateAnswer }) => {

    const initRecState = {
        isRecording: false,
        isBlocked: false,
        blobURL: '',
        recTime: null,
    }
    const initAnsState = {
        ansText: '',
        ansAudio: null, 
        saving: false
    }

    // STATE
    const [recorder, setRecorder] = useState(initRecState)
    const [newAnswer, setNewAnswer] = useState(initAnsState)
    const [intervalId, setIntervalId] = useState(null)

    // ASK FOR MIC PERMISSIONS
    useEffect(() => {
        navigator.getUserMedia({ audio: true },
            () => {
                console.log('Permission Granted')
                setRecorder(pr => ({
                    ...pr,
                    isBlocked: false
                }))
            },
            () => {
                console.log('Permission Denied')
                setRecorder(pr => ({
                    ...pr,
                    isBlocked: true
                }))
            }
        );
    }, [])


    const startRecording = () => {

        Timer("start")

        if (recorder.isBlocked) {
            console.log('Premission Denied');
            return;
        }

        Mp3Recorder
            .start()
            .then(() => {
                setRecorder(pr => ({
                    ...pr,
                    isRecording: true
                }))
            }).catch(console.log);
    }


    const stopRecording = () => {

        Timer("stop")

        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                setRecorder(pr => ({
                    ...pr,
                    blobURL,
                    isRecording: false
                }))
                setNewAnswer(pr => ({
                    ...pr,
                    ansAudio: blob
                }))
            }).catch(console.log);
    }


    const cancelRecording = () => {
        setRecorder(pr => ({
            ...pr, 
            blobURL: ''
        }))
    }


    const Timer = (action) => {
        if (action === "start") {
            const timerStatsAt = new Date().getTime()
            const id = setInterval(() => {
                setRecorder(pr => ({
                    ...pr,
                    recTime: formattedTime(new Date().getTime() - timerStatsAt)
                }))
            }, 1000)

            setIntervalId(id)
        }
        else if (action === "stop") {
            console.log("stop")
            clearInterval(intervalId)
            setRecorder(pr => ({
                ...pr,
                recTime: null
            }))
        }
    }

    const formattedTime = (delta) => {

        let secs = Math.floor(delta / 1000);
        let mins = Math.floor(secs / 60);
        secs = secs % 60;

        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }


    const handleChange = (e) => {
        setNewAnswer(pr => ({
            ...pr,
            [e.target.name]: e.target.value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (newAnswer.ansText === '' && newAnswer.ansAudio === null) {
            console.log('no change made!')
            return
        }
        
        let fd = new FormData()
        setNewAnswer(pr => ({
            ...pr,
            saving: true
        }))
        
        if (newAnswer.ansText.length > 0) {
            fd.append('ans_text', newAnswer.ansText)
        }
        if (newAnswer.ansAudio !== null) {
            const filename = new Date().toISOString()
            fd.append('ans_audio', newAnswer.ansAudio, filename)
        }

        saveAnswer(quesId, fd)
            .then(res => {
                console.log(res)
                updateAnswer(res.data)
                setNewAnswer(pr => ({
                    ...pr,
                    saving: false
                }))
            })
            .catch(console.log)
    }

    return (
        <div className="newans-form">
            <h2>Create a New Answer</h2>
            <form className="ques-body">
                <div className="audio-ctrl">
                    <audio src={recorder.blobURL} controls="controls" />
                </div>
                {
                    (recorder.recTime) && (
                        <div className = "rec-time">
                            {recorder.recTime}
                        </div>
                    )
                }
                <div className="control-btns">
                    <button 
                        type="button" 
                        onClick={startRecording} 
                        disabled={recorder.isRecording}
                    >
                        Record
                    </button>
                    <button 
                        type="button" 
                        onClick={stopRecording} 
                        disabled={!recorder.isRecording}
                    >
                        Stop
                    </button>
                    <button 
                        type="button" 
                        onClick={cancelRecording} 
                        disabled={recorder.isRecording}
                    >
                        Delete
                    </button>
                </div>
                
                <div>
                    <textarea
                        placeholder="Type a new answer..."
                        name='ansText'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button 
                        type="submit" 
                        onClick={handleSubmit}
                        className={newAnswer.saving ? `save-btn saving` : `save-btn`}
                        disabled={newAnswer.saving}
                    >
                    {
                        (newAnswer.saving) ? `Saving` : `Submit Answer`
                    }
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AnswerForm

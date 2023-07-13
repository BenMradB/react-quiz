import React, { useEffect } from 'react'
import styles from './Question.module.css'
import AnswersList from '../AnswersList/AnswersList';

const Question = ({ question, timer, dispatch, children }) => {
    useEffect(() => {
        const interval = setInterval(() => dispatch({ type: 'questions/timer/countDown' }), 1000)

        return () => clearInterval(interval);
    }, [timer]);
    return (
        <div className={styles.question}>
            <h2>{question.question}</h2>
            {children}
        </div>
    )
}

export default Question
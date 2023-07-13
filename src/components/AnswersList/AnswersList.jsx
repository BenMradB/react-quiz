import React from 'react'
import styles from './AnswersList.module.css'
import AnswerItem from '../AnswerItem/AnswerItem'
const AnswersList = ({ answers, correctOption, userAnswer, dispatch }) => {
    return (
        <ul className={styles.answers}>
            {
                answers.map((answer, i) => (
                    <AnswerItem
                        key={i}
                        answer={answer}
                        answerType={userAnswer !== null ? correctOption === i ? 'correct' : 'wrong' : ''}
                        userAnswer={userAnswer !== null ? userAnswer === i ? 'userAnswer' : '' : ''}
                        onAnswer={() => dispatch({ type: 'questions/answer', payload: i })} />
                ))
            }
        </ul>
    )
}

export default AnswersList 
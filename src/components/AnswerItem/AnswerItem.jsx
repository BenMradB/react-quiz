import React from 'react'
import styles from './AnswerItem.module.css'
const AnswerItem = ({ answer, answerType, userAnswer, onAnswer }) => {
    return (
        <li className={`${styles.answer} ${styles[answerType]} ${styles[userAnswer]}`} onClick={onAnswer}>
            {answer}
        </li>
    )
}

export default AnswerItem
import React from 'react'
import styles from './QuestionFooter.module.css'
import Button from '../Button/Button'
import Timer from '../Timer/Timer'
const QuestionFooter = ({ userAnswer, dispatch, lastQuestion, timer, children }) => {
    return (
        <footer className={styles.footer}>
            {children}
        </footer>
    )
}

export default QuestionFooter
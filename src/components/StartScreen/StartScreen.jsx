import React from 'react'
import styles from './StartScreen.module.css'
import Button from '../Button/Button'
const StartScreen = ({ numQuestions, dispatch }) => {
    return (
        <div className={styles.startScreen}>
            <h2>Welcome to The React Quiz!</h2>
            <p><b>{numQuestions}</b> questions to test your React mastery</p>
            <Button onClick={() => dispatch({ type: 'questions/start' })}>
                Let's start
            </Button>
        </div>
    )
}

export default StartScreen
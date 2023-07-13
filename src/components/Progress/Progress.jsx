import React from 'react'
import styles from './Progress.module.css'
const Progress = ({ numQuestions, currentQuestion, totalPoints, gainedPoints }) => {
    return (
        <div className={styles.container}>
            <progress className={styles.progress} value={gainedPoints} max={totalPoints} />
            <div>
                <p>
                    Question {currentQuestion + 1} / <b>{numQuestions}</b>
                </p>
                <p>
                    <b>{gainedPoints}</b> / {totalPoints}
                </p>
            </div>
        </div>
    )
}

export default Progress
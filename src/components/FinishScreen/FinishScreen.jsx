import React from 'react'
import styles from './FinishScreen.module.css'
import Button from '../Button/Button'
const FinishScreen = ({ gainedPoints, totalPoints, dispatch }) => {
    const percentage = (gainedPoints / totalPoints) * 100;
    let emoji;
    if (percentage === 100) emoji = "🥇";
    if (percentage >= 80 && percentage < 100) emoji = "🎉";
    if (percentage >= 50 && percentage < 80) emoji = "🙃";
    if (percentage >= 0 && percentage < 50) emoji = "🤨";
    if (percentage === 0) emoji = "🤦‍♂️";
    return (
        <div className={styles.finishScreen}>
            <h2> {emoji} You scored {gainedPoints} out of {totalPoints} ({percentage.toFixed(0)}%)</h2>
            <p>(Highest Score is : {gainedPoints})</p>
            <Button onClick={() => dispatch({ type: 'questions/restart' })}>Restart quiz</Button>
        </div>
    )
}

export default FinishScreen
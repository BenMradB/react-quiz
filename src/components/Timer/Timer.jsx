import React from 'react'
import styles from './Timer.module.css'
const Timer = ({ timer }) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return (
        <div className={styles.timer}>
            {minutes < 10 && '0'}{minutes} : {seconds < 10 && '0'}{seconds}
        </div>
    )
}

export default Timer
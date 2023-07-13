import React from 'react'
import styles from './Header.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
            <img src="images/logo512.png" alt="react logo" />
            <h1>The React Quiz</h1>
        </header>
    )
}

export default Header
import React from 'react'
import styles from './Message.css'

export default ({message}) => (
    message
        ? <span className={styles.message}>{message}</span>
        : null
)

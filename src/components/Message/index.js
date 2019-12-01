import React from 'react'
import styles from './Message.module.css'

export default ({message}) => (
    message
        ? <span className={styles.message}>{message}</span>
        : null
)

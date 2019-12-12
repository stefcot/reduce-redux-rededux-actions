import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import styles from './Message.module.css'

export default ({message}) => (
    message
        ? <span className={styles.message}>{ReactHtmlParser(message)}</span>
        : null
)

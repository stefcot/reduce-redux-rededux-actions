import React from 'react'
import './Message.css'

export default ({message}) => (
    message
        ? <span className='message'>{message}</span>
        : null
)

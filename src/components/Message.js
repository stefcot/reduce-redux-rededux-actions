import React from 'react'
import {connect} from "react-redux";
import './Message.css'

const Message = ({message}) => (
  message
    ? <span className='message'>{message}</span>
    : null
)

const mapStateToProps = (state) => ({
  message: state.message // passed this way cause it doesn't have any property
})

export default connect(mapStateToProps)(Message)

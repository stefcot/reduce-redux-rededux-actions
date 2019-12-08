import React from 'react'
import styles from './Loader.module.css'

const Loader = () => (
  <div className={styles['lds-ring']}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Loader

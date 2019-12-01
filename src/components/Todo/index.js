import React from 'react'
import styles from './Todo.module.css'

export default ({ id, name, isComplete, toggleTodo, deleteTodo }) => (
  <li className={styles['todo-list-item']}>
    <input
      id={"cb" + id}
      name={"cb" + id}
      type="checkbox"
      onChange={() => toggleTodo(id)}
      checked={isComplete}
      className={styles['todo-list-item-cb']}/>
    <label htmlFor={"cb" + id}/>
    <span className={styles['todo-list-item-label']}>{name}</span>
    <button
      className={styles['todo-list-item-button-delete']}
      onClick={() => deleteTodo(id)}>X</button>
  </li>
)

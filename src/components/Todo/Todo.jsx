import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaTrashCan } from "react-icons/fa6";
import styles from "./Todo.module.css";

export default function Todo({todo, onUpdate, onDelete}) {

const {id,text, status} = todo;

const handleChange = (e) => {
    onUpdate({...todo, status: e.target.checked ? "completed" : "active"});
}
const handleDelete = () => {
    onDelete(todo);
}

return (
<li className={styles.lists}>
    <input type="checkbox" className={styles.checkbox} id={id} checked = {status ==="completed"} onChange = {handleChange}/>
    <label className = {styles.label} htmlFor={id} >{text}</label>
<span className={styles.icon}>
<button className = {styles.button} onClick = {handleDelete}><FaTrashCan/></button>

</span></li>
  )

}
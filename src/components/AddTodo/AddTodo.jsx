import React, { useState } from 'react'
import styles from "./AddTodo.module.css";

import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({onAdd}) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    //사용자가 아무것도 추가 하지 않을 때나 공백만 입력했을 때는 전달하지 않게 하고 싶다
    //input.trim() 은 문자열 양쪽의 공백을 제거한다
    //if(input.trim()==='') return; 또는
    if(input.trim().length === 0) return;

    //고유한 아이디를 부여하는 법
    //1. date() 해서 시간 날짜로 고유 아이디 설정하는 법
    //2. uuid library 사용하는 법
    onAdd({id:uuidv4(), text: input, status: 'active'});
    setInput('');
}

  return (
    <form onSubmit={handleSubmit} className={styles.form}>     
        <input type="text" value={input} className={styles.input}
        onChange={(e) => setInput(e.target.value)} />
        <button className ={styles.button} >ADD</button>
    </form>
  )
}
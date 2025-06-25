import React, { useEffect, useState } from "react";  
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({filter}) {
   const [todos, setTodos] = useState(()=>readTodos());
   //callback  함수로 해야함 이유는 8.21 강의 참고

  //todos 가 업데이트되면 localStorage에 데이터 저장
  useEffect(()=>{
    //배열 데이터 저장 : JSON 형태의 문자열로 변환
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);


    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) =>
        {
            setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))
        }
        
    
      const handleDelete = (deleted) => {
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
      }
    
const filtered = getFilteredItems(todos, filter);
      return (
        <section className={styles.container}>

          <ul className={styles.list}>
            {filtered.map((item) => (
              <Todo
                key={item.id}
                todo={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}

            
          </ul>
          <AddTodo onAdd={handleAdd} />
        </section>
      );
}

function readTodos(){
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter){
    if(filter === 'all') {
        return todos;
    }
    return todos.filter((todo)=> todo.status ===filter);
    
}
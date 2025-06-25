import React, {useContext} from 'react'
import styles from './Filter.module.css';
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { useDarkMode } from '../context/DarkModeContext';

export default function Filter({filters, filter, onFilterChange}) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  return (

     <header className = {styles.header} >
    <button className={styles.toggle} onClick={() => toggleDarkMode()}>{darkMode ? (<IoMdMoon />) : (<IoMdSunny />)}</button>


<ul className={styles.filters}>
  {filters.map((value, index)=><li key={index} ><button className={ `${styles.filter} ${filter ===value && styles.selected}`} onClick = {()=>onFilterChange(value)}>{value}</button></li>)}
</ul>
</header>


  )
}
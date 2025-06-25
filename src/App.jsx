import './App.css';
import Filter from './components/Filter/Filter';
import TodoList from './components/TodoList/TodoList';
import { useState, useContext } from 'react';
import { DarkModeProvider } from './components/context/DarkModeContext';



const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider >
     <Filter
      filters = {filters} 
     filter ={filter} 
     onFilterChange = {(filter)=>setFilter(filter)}/>

      <TodoList filter = {filter}/>
    </DarkModeProvider>
  );
}

export default App;

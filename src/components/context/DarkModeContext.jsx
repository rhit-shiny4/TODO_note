import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

//darkmode context 와 그걸 사용하는 우산인 provider 
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
    updateDarkMode(!darkMode);
  };

  useEffect(()=>{
const isDark = localStorage.theme === 'dark' ||
(!('theme' in localStorage) &&
window.matchMedia('(prefers-color-scheme: dark)').matches);
setDarkMode(isDark);
updateDarkMode(isDark);

  },[])

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode){
  if(darkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

// 그냥 useDarkMode 만 하면 따로 DarkModeContext 쓴다고 명시하지 않아도 자동으로 설정되게 할 수 이싿 
export const useDarkMode = ()=> useContext(DarkModeContext);
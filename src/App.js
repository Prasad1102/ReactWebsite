import React, {useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
// import About from './component/About';
import TextForm from './component/TextForm';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#003333';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm mode={mode}/> 
      {/* <About/> */}
      </div>
    </> 
  );
}

export default App;

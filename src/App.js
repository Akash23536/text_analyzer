
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert =(message,type)=>{
setAlert({                                   
  msg: message,
  type: type
})

setTimeout(() => {                          
  setAlert(null);
}, 1500);
}
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enable","success")
                                
      // setInterval(() => {
      //   document.title ="Made By:- Akash Bhadana";
      // }, 2000);

      // setInterval(() => {
      //   document.title ="TextUtils is Amazing App";
    // }, 1500);
        
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enable","success")
      // document.title ="TextUtils - Light Mode";                           // in google tabs to set title of app when Lightmode is activated
    }
  }
  return (
    <>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
      <Alert  alert = {alert}/>
      <div className="container my-2">
          <TextForm  showAlert= {showAlert} Heading="Text Analyzer - Word counter, Character counter, Remove extra spaces" mode={mode} />
      </div>
    </>
  );
}
export default App;


// in package.json
// "homepage": "https://Akash23536.github.io/text_analyzer",
// script tag ma 
// "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",

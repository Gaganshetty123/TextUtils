import Navbar from './component/Navbar';
import './App.css';
import TextForm from './component/TextForm';
import About from './component/About';
import React,{useState} from 'react';
import Alert from './component/Alert';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);

  const toggle=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is Enabled","sucess");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#062149';
      showAlert("Dark Mode is Enabled","sucess");
    }
  }

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{setAlert(null)},2000);
}
  return (
  <>
    <BrowserRouter>
      <Navbar title="TEXT UTILS" home="Home" about="About" mode={mode} toggle={toggle} />
      <Alert alert={alert}/>
      <div className="container my-4">
        <Routes>
            <Route exact path="/about"  element={<About mode={mode}/>}>
          </Route>
            <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze" showAlert={showAlert} mode={mode}/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;

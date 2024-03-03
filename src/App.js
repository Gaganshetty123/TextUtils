import Navbar from './component/Navbar';
import './App.css';
import TextForm from './component/TextForm';
import About from './component/About';
import React,{useState} from 'react';
import Alert from './component/Alert';

// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

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
      {/* about="About" */}
    {/* <BrowserRouter> */}
      <Navbar title="TEXT UTILS" home="Home"  mode={mode} toggle={toggle} />  
      <Alert alert={alert}/>
      <div className="container my-4">
      <TextForm heading="Enter The Text To Analyze" showAlert={showAlert} mode={mode}/>
        {/* <Routes> */}
          {/* <Route path="/about"  element={<About/>}> */}
          {/* </Route> */}
          {/* <Route path="/" element={}> */}
          {/* </Route> */}
        {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;

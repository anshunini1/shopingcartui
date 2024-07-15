import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Landingpage from './components/Landingpage';
import Homepage from './components/home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchconfig } from './redux/Actiions/common';
function App() {
  const dispatch =useDispatch()
  const data = useSelector(state => state.commomn.token);
  useEffect(()=>{
    if(data &&  data.hasOwnProperty('keys'))
    {
     window.publicKey="-----BEGIN PUBLIC KEY-----"
+"\n"+data.keys+"\n"+
"-----END PUBLIC KEY-----"
    }
   },[data])
  useEffect(()=>{
    dispatch(fetchconfig())
  },[])
  
  return (
    <>  
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}>  </Route>
        <Route path="/home" element={<Homepage />}></Route>
      
      </Routes>
    </BrowserRouter>
    </>
  

  );
}

export default App;

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Landingpage from './components/Landingpage';
import Homepage from './components/home';
function App() {
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

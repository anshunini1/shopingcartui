import Loginform from "../components/loginform"
import {  useState } from 'react';
function Landingpage() {
  const [authtype,setauthtype] = useState(undefined)
  return (
    <>  
     {!authtype? <div className='landingmain'>
      <div className='landingcontainer'>
    <h1 className='landingh1'>Wellcome to NiNi</h1>  
      <button className='landingbtn' onClick={() =>setauthtype("login")} >Login</button>
      <button className='landingbtn' onClick={() =>setauthtype("register")}>SignUp</button>
      </div>
      </div>: null }
      {authtype? <Loginform authtype={authtype} setauthtype={setauthtype}></Loginform>:null}
     
    </>
  

  );
}

export default Landingpage;

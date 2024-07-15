import React, { useEffect, useState } from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Login ,Register} from '../redux/Actiions/auth';
import { toast } from 'react-toastify';
import {
    useNavigate
} from "react-router-dom";
import { encryptString } from '../helpers/crypto';
const Loginform = (props) =>{
    const navigate = useNavigate()
    const data = useSelector(state => state.auth.token);
    const {
        register,
        handleSubmit,getValues ,
        formState: { errors },
    } = useForm();
    const [type,setType] =useState('password')
    const [eyeicon,seteyeicon] =useState(eyeOff)
    const dispatch= useDispatch()
    const seteye = ()=>{
        if (type==='password'){
            seteyeicon(eye);
            setType('text')
         } else {
            seteyeicon(eyeOff)
            setType('password')
         }
    }
    useEffect(()=>{
if(data &&  data.hasOwnProperty('error'))
{
    dispatch({ type: "LOGIN_DETAILS", payload: {}});
    toast.error(data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
}
else if(data &&  data.hasOwnProperty('accesstoken'))
    {
        dispatch({ type: "LOGIN_DETAILS", payload: {}});
       window.accesstoken=data.accesstoken
       window.refreshtoken=data.refreshtoken
       navigate('/home')
    }
    },[data])
    const onSubmit = (data) => {
        if(props.authtype==="login")
        {
            const body={
                email:getValues("email"),
                password :getValues("password")
            }
            encryptString(JSON.stringify(body)).then((data)=>
            {
            dispatch(Login({"M":data}))}
        ).catch((err)=> toast.error("Unable to fetch config.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          }))
        
        }
        if(props.authtype==="register")
            {
                const body={
                    email:getValues("email"),
                    password :getValues("password")
                }
                encryptString(JSON.stringify(body)).then((data)=>
                    {
                    dispatch(Register({"M":data}))}
                ).catch((err)=> toast.error("Unable to fetch config.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  }))
       
            }
       
    };
    return(
        <div className='wraperlogin'>
                <div className='backdiv'> <button className='back' onClick={() =>props.setauthtype(undefined)} >&#8249;</button></div>
        <form  className='loginform' onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" placeholder="Enter email"{...register("email", { required: true })} required ></input>
        <label>Password</label>
        <input type={type}  placeholder="Enter password" {...register("password")} required></input>
        <span className='eye' onClick={seteye}>
                  <Icon icon={eyeicon} size={25}/>
              </span>
        <input type={"submit"} />
        </form >
        </div>
    )
}
export default Loginform
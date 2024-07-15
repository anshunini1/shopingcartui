import axios from 'axios';
import {
    LOGIN_DETAILS
  } from "./types";
//var url= ["https://", window.location.hostname,"/embed"].join("");
var url=window.api_endpoint = ["http://","localhost:7800"].join("");
export const Login = (body) => {
    return (dispatch) => {
      axios.post(url+`/auth/login`,body)
        .then((response) => {
          dispatch({ type: LOGIN_DETAILS, payload: response.data});
        })
        .catch((error) => {
          dispatch({ type: LOGIN_DETAILS, payload: {error:true, message :error.response && error.response.data && error.response.data.error && error.response.data.error.message }});
        });
    };
  };
  export const Register = (body) => {
    return (dispatch) => {
      axios.post(url+`/auth/register`,body)
        .then((response) => {
          dispatch({ type: LOGIN_DETAILS, payload: response.data});
        })
        .catch((error) => {
          dispatch({ type: LOGIN_DETAILS, payload: {error:true, message :error.response && error.response.data && error.response.data.error && error.response.data.error.message }});
        });
    };
  };
  


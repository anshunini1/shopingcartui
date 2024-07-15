import axios from 'axios';
import {
    CONFIG_FETCH
  } from "./types";
//var url= ["https://", window.location.hostname,"/embed"].join("");
var url=window.api_endpoint = ["http://","localhost:7800"].join("");
export const fetchconfig = (body) => {
    return (dispatch) => {
      axios.get(url+`/fetchconfig`)
        .then((response) => {
          dispatch({ type: CONFIG_FETCH, payload: response.data});
        })
        .catch((error) => {
          dispatch({ type: CONFIG_FETCH, payload: {error:true, message :error.response && error.response.data && error.response.data.error && error.response.data.error.message }});
        });
    };
  };

  


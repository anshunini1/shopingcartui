import {
  LOGIN_DETAILS,
  } from "../Actiions/types";
  const initialState = {
    token:{}
  };
  function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_DETAILS:
            return { ...state, token: action.payload };
      default:
        return state;
    }
  };
  export default auth;
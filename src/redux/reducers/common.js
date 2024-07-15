import {
    CONFIG_FETCH,
    } from "../Actiions/types";
    const initialState = {
      token:{}
    };
    function commomn(state = initialState, action) {
      switch (action.type) {
          case CONFIG_FETCH:
              return { ...state, token: action.payload };
        default:
          return state;
      }
    };
    export default commomn;
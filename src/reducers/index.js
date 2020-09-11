import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import customizer from "./customizer";
import auth from "./auth";
import infirmiere from './infirmiere'


const rootReducer = combineReducers({
    routing: routerReducer,
    toastr: toastrReducer,
  
    /* place your reducers here */
    customizer,
    auth, 
    infirmiere
    
  });
  
  export default rootReducer;
  
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import customizer from "./customizer";
import auth from "./auth";


const rootReducer = combineReducers({
    routing: routerReducer,
    toastr: toastrReducer,
  
    /* place your reducers here */
    customizer,
    auth, 
    
  });
  
  export default rootReducer;
  
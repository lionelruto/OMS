import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import customizer from "./customizer";
import auth from "./auth";
import infirmiere from './infirmiere'
import patients from './patients'
import user from './user'
import carte from './cartes'



const rootReducer = combineReducers({
    routing: routerReducer,
    toastr: toastrReducer,
  
    /* place your reducers here */
    customizer,
    auth, 
    infirmiere,
    patients,
    user,
    carte
  });
  
  export default rootReducer;
  
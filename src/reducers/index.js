import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import customizer from "./customizer";
import auth from "./auth";
import infirmiere from './infirmiere'
import patients from './patients'
import user from './user'
import carte from './cartes'
import file from './file_attente'
import DMP_Radio from './DMP_analyse_radio'
import DMP_Bio from './DMP_analyse_bio'
import DMP_consultation from './DMP_consultation'
import DMP_Hospitalisation from './DMP_hospitalisation'







const rootReducer = combineReducers({
    routing: routerReducer,
    toastr: toastrReducer,
  
    /* place your reducers here */
    customizer,
    auth, 
    infirmiere,
    patients,
    user,
    carte,
    file,
     DMP_Radio ,
     DMP_Bio,
     DMP_consultation,
     DMP_Hospitalisation


  });
  
  export default rootReducer;
  
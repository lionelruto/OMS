import { createReducer } from '../utility/misc';

import{
   FETCH_DMP_HOSPITALISATION_REQUEST,
   FETCH_DMP_HOSPITALISATION_SUCCESS,
   FETCH_DMP_HOSPITALISATION_FAILURE
} 
from "../constants/action_types";

const initialState = {
    Hospitalisation: [ 
        {
    
            Consultation: "Premiere",
            Medecin :"Fouda",
            Date:'mardi 24 juin 2019'
        
         },
         {
          
         
            Consultation: "Deuxieme",
            Medecin :"Fouda",
            Date:'mardi 24 juin 2019'
         },
         {
        
            Consultation: "Troixieme",
            Medecin :"Fouda",
            Date:'mardi 30 Septembre 2019'
      }    
    ],
    cartes:[

    ],

    isFetchingHospitalisation: false,
    isLoadedHospitalisation: false,
    fetchHospitalisationError: null,

}

export default createReducer(initialState, {
    [FETCH_DMP_HOSPITALISATION_REQUEST]: (state)=>({
        ...state,
        isFetchingHospitalisation: true,
        isLoadedHospitalisation: false,
        fetchHospitalisationError: null,
    }),
    [FETCH_DMP_HOSPITALISATION_SUCCESS]: (state, payload)=>({
        ...state,
        isFetchingHospitalisation: false,
        isLoadedHospitalisation: true,
        Hospitalisation: payload,
    }),
    [FETCH_DMP_HOSPITALISATION_FAILURE]: (state, error)=>({
        ...state,
     isFetchingHospitalisation: false,
    isLoadedHospitalisation: false,
    fetchHospitalisationError: error,
    })
   
})
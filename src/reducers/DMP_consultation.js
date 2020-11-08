import { createReducer } from '../utility/misc';

import{
   FETCH_DMP_CONSULTATION_REQUEST,
   FETCH_DMP_CONSULTATION_SUCCESS,
   FETCH_DMP_CONSULTATION_FAILURE
} 
from "../constants/action_types";

const initialState = {
    Consultation: [ 
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

    isFetchingConsultaion: false,
    isLoadedConsultaion: false,
    fetchConsultaionError: null,

}

export default createReducer(initialState, {
    [FETCH_DMP_CONSULTATION_REQUEST]: (state)=>({
        ...state,
        isFetchingConsultaion: true,
        isLoadedConsultaion: false,
        fetchConsultaionError: null,
    }),
    [FETCH_DMP_CONSULTATION_SUCCESS]: (state, payload)=>({
        ...state,
        isFetchingConsultaion: false,
        isLoadedConsultaion: true,
        Consultation: payload,
    }),
    [FETCH_DMP_CONSULTATION_FAILURE]: (state, error)=>({
        ...state,
     isFetchingConsultaion: false,
    isLoadedConsultaion: false,
    fetchConsultaionError: error,
    })
   
})
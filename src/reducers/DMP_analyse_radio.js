import { createReducer } from '../utility/misc';

import{
   FETCH_DMP_RADIO_REQUEST,
   FETCH_DMP_RADIO_SUCCESS,
   FETCH_DMP_RADIO_FAILURE
} 
from "../constants/action_types";

const initialState = {
    AnalyseRadio: [  
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

    isFetchingAnalyseRadio: false,
    isLoadedAnalyseRadio: false,
    fetchAnalyseRadioError: null,

}

export default createReducer(initialState, {
    [FETCH_DMP_RADIO_REQUEST]: (state)=>({
        ...state,
        isFetchingAnalyseRadio: true,
        isLoadedAnalyseRadio: false,
        fetchAnalyseRadioError: null,
    }),
    [FETCH_DMP_RADIO_SUCCESS]: (state, payload)=>({
        ...state,
        isFetchingAnalyseRadio: false,
        isLoadedAnalyseRadio: true,
        AnalyseRadio: payload,
    }),
    [FETCH_DMP_RADIO_FAILURE]: (state, error)=>({
        ...state,
     isFetchingAnalyseRadio: false,
    isLoadedAnalyseRadio: false,
    fetchAnalyseRadioError: error,
    })
   
})
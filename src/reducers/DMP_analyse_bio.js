import { createReducer } from '../utility/misc';

import{
   FETCH_DMP_BIO_REQUEST,
   FETCH_DMP_BIO_SUCCESS,
   FETCH_DMP_BIO_FAILURE
} 
from "../constants/action_types";

const initialState = {
    AnalyseBio: [  {
    
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
        Date:'mardi 24 juin 2019'
     }],
    cartes:[

    ],

    isFetchingAnalyseBio: false,
    isLoadedAnalyseBio: false,
    fetchAnalyseBioError: null,

}

export default createReducer(initialState, {
    [FETCH_DMP_BIO_REQUEST]: (state)=>({
        ...state,
        isFetchingAnalyseBio: true,
        isLoadedAnalyseBio: false,
        fetchAnalyseBioError: null,
    }),
    [FETCH_DMP_BIO_SUCCESS]: (state, payload)=>({
        ...state,
        isFetchingAnalyseBio: false,
        isLoadedAnalyseBio: true,
        AnalyseBio: payload,
    }),
    [FETCH_DMP_BIO_FAILURE]: (state, error)=>({
        ...state,
     isFetchingAnalyseBio: false,
    isLoadedAnalyseBio: false,
    fetchAnalyseBioError: error,
    })
   
})
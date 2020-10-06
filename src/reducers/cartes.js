import { createReducer } from '../utility/misc';

import{
   FETCH_CARTE_REQUEST,
   FETCH_CARTE_SUCCESS,
   FETCH_CARTE_FAILURE
} 
from "../constants/action_types";

const initialState = {
    Carte: [  {
    
        fullName: "Premium",
        SerialNumber :12345621,
    
     },
     {
      
     
        fullName: "Classic",
        SerialNumber :12345620,
     },
     {
    
        fullName: "Golden Premium",
        SerialNumber :12345630,
    
     }],
    cartes:[

    ],

    isFetchingCarte: false,
    isLoadedCarte: false,
    fetchCarteError: null,

}

export default createReducer(initialState, {
    [FETCH_CARTE_REQUEST]: (state)=>({
        ...state,
        isFetchingCarte: true,
        isLoadedCarte: false,
        fetchCarteError: null,
    }),
    [FETCH_CARTE_SUCCESS]: (state, payload)=>({
        ...state,
        isFetchingCarte: false,
        isLoadedCarte: true,
        cartes: payload,
    }),
    [FETCH_CARTE_FAILURE]: (state, error)=>({
        ...state,
     isFetchingCarte: false,
    isLoadedCarte: false,
    fetchCarteError: error,
    })
   
})
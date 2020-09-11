import { createReducer } from '../utility/misc';

import{
   FTCH_PATIENT_REQUEST,
   FTCH_PATIENT_SUCCESS,
   FTCH_PATIENT_FAILURE
} 
from "../constants/action_types";

const initialState = {
    patients: [  {
        img: "https://randomuser.me/api/portraits/med/women/10.jpg",
        fullName: "Jessica Rice",
        position: "UX Designer",
        flag: 1
     },
     {
        img: "https://randomuser.me/api/portraits/med/men/0.jpg",
        fullName: "Jacob Rios",
        position: "HTML Developer",
        flag: 0
     },
     {
        img: "https://randomuser.me/api/portraits/med/men/1.jpg",
        fullName: "Russell Delgado",
        position: "Database Designer",
        flag: 0
     },
     {
        img: "https://randomuser.me/api/portraits/med/women/3.jpg",
        fullName: "Sara McDonald",
        position: "Team Leader",
        flag: 1
     },
     {
        img: "https://randomuser.me/api/portraits/med/men/3.jpg",
        fullName: "Peter Parker",
        position: "UI/UX Designer",
        flag: 1
     }],
    cartes:[

    ],

    isFetchingPatients: false,
    isLoadedPatients: false,
    fetchPatientError: null,
    // isFetchingAllRoles: false,
    // isLoadedAllRoles: false,
    
    
    
}

export default createReducer(initialState, {
    [FTCH_PATIENT_REQUEST]: (state)=>({
        ...state,
        isFetchingPatients: true,
        isLoadedPatients: false,
        fetchPatientError: null,
    }),
    [FTCH_PATIENT_SUCCESS]: (state, payload)=>({
        ...state,
        isFetchingPatients: false,
        isLoadedPatients: true,
        fetchPatientError: payload,
    }),
    [FTCH_PATIENT_FAILURE]: (state, error)=>({
        ...state,
        isFetchingPatients: false,
    isLoadedPatients: false,
    fetchPatientError: error,
    })
   
})
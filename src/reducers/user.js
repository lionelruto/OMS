import { createReducer } from '../utility/misc';

import{
   FETCH_USER_REQUEST,
   FETCH_USER_SUCCESS,
   FETCH_USER_FAILURE
} 
from "../constants/action_types";

const initialState = {
    users: [  {
        img: "https://randomuser.me/api/portraits/med/women/10.jpg",
        fullName: "Mbarga atangana Clement",
        position: "UX Designer",
        flag: 1
     },
     {
        img: "https://randomuser.me/api/portraits/med/men/0.jpg",
        fullName: "Afessoh Rios de janero",
        position: "HTML Developer",
        flag: 0
     },
     {
        img: "https://randomuser.me/api/portraits/med/men/1.jpg",
        fullName: "Epalley jr",
        position: "Database Designer",
        flag: 0
     },
     {
        img: "https://randomuser.me/api/portraits/med/women/3.jpg",
        fullName: "Ndabo jean de Dieu",
        position: "Team Leader",
        flag: 1
     },
     {
        img: "https://randomuser.me/api/portraits/med/men/3.jpg",
        fullName: "Lionel Mambingo",
        position: "UI/UX Designer",
        flag: 1
     }],
    cartes:[

    ],

    isFetchingusers: false,
    isLoadedusers: false,
    fetchuserError: null,
    // isFetchingAllRoles: false,
    // isLoadedAllRoles: false,
    
    
    
}

export default createReducer(initialState, {
    [FETCH_USER_REQUEST]: (state)=>({
        ...state,
        isFetchingusers: true,
        isLoadedusers: false,
        fetchuserError: null,
    }),
    [FETCH_USER_SUCCESS]: (state, payload)=>({
        ...state,
        isFetchingusers: false,
        isLoadedusers: true,
        // users: payload,
    }),
    [FETCH_USER_FAILURE]: (state, error)=>({
        ...state,
        isFetchingusers: false,
    isLoadedusers: false,
    fetchuserError: error,
    })
   
})
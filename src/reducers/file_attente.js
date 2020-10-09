import { createReducer } from '../utility/misc';

import{
   FETCH_PATIENT_TO_FILE_REQUEST,
   FETCH_PATIENT_TO_FILE_SUCCESS,
   FETCH_PATIENT_TO_FILE_FAILURE
} 
from "../constants/action_types";

const initialState = {
   
    patientsToFile: [  {
        id:1,
        img: "https://randomuser.me/api/portraits/med/women/10.jpg",
        fullName: "Jessica Rice",
        position: "UX Designer",
        flag: 1,
        carte:{
            SerialNumber:12345620
        },
        gsanguin:'A+',
        lastname:'Azoo',
        sexe:'M',
        rhesus:'positif',
        profession:'voleur',
        quartier:'Etoudi',
        firstname:'Jessica Rice',
        poids: '60kg',
        tension :'12',
        temperature:'28',
        frequence:'76'




     },
     {
         id:2,
        img: "https://randomuser.me/api/portraits/med/men/0.jpg",
        fullName: "Jacob Rios",
        position: "HTML Developer",
        flag: 0,
        carte:{
            SerialNumber:12345620
        },
        gsanguin:'B+',
        lastname:'AQuEro',
        sexe:'M',
        rhesus:'Negatif',
        profession:'Bagareur de La sape',
        quartier:'Manguier',
        firstname:'JohnDoh',
        poids: '70kg',
        tension :'13',
        temperature:'29',
        frequence:'85'

     },
     {
         id:3,
        img: "https://randomuser.me/api/portraits/med/men/1.jpg",
        fullName: "Russell Delgado",
        position: "Database Designer",
        flag: 0,
        carte:{
            SerialNumber:12345620
        },
        gsanguin:'A-',
        lastname:'Basil',
        sexe:'M',
        rhesus:'positif',
        profession:'Taximan',
        quartier:'Etoudi',
        firstname:'Biloa Rice',
        poids: '80kg',
        tension :'12',
        temperature:'28',
        frequence:'90'

     },
     {
         id:4,
        img: "https://randomuser.me/api/portraits/med/women/3.jpg",
        fullName: "Sara McDonald",
        position: "Team Leader",
        flag: 1,
        carte:{
            SerialNumber:12345620
        },
        gsanguin:'B+',
        lastname:'Manga',
        sexe:'M',
        rhesus:'negatif',
        profession:'Acteur',
        quartier:'NKOL',
        firstname:'Rugal iori',
        poids: '90kg',
        tension :'12',
        temperature:'28',
        frequence:'100'

     },
     {
         id:5,
        img: "https://randomuser.me/api/portraits/med/men/3.jpg",
        fullName: "Peter Parker",
        position: "UI/UX Designer",
        flag: 1,
        carte:{
            SerialNumber:12345620
        },
        gsanguin:'A+',
        lastname:'Yagami',
        sexe:'M',
        rhesus:'positif',
        profession:'Fighter',
        quartier:'Etoudi',
        firstname:'Iori Rice',
        poids: '60kg',
        tension :'12',
        temperature:'28',
        frequence:'80'

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
    [FETCH_PATIENT_TO_FILE_REQUEST]: (state)=>({
        ...state,
        isFetchingPatients: true,
        isLoadedPatients: false,
        fetchPatientError: null,
    }),
    [FETCH_PATIENT_TO_FILE_SUCCESS]: (state, payload)=>({
        ...state,
        isFetchingPatients: false,
        isLoadedPatients: true,
        fetchPatientError: payload,
    }),
    [FETCH_PATIENT_TO_FILE_FAILURE]: (state, error)=>({
        ...state,
        isFetchingPatients: false,
    isLoadedPatients: false,
    fetchPatientError: error,
    })
   
})
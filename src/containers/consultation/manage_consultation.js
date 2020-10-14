import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ListsView from '../../components/pages/consultation'
import { components } from 'react-select'
import { Edit, Trash2, Trash, PlusCircle, Loader } from "react-feather";
import {
    ADD_PATIENT_ROUTE,
    LOGIN_VIEW_ROUTE,
    MAIN_INFIRMIERE_ROUTE,
    LIST_PATIENT_ROUTE,
    ADD_CARTE_ROUTE,
    MAIN_VIEW_ROUTE,
    LIST_CARTE_ROUTE,
    EDIT_CONSULTATION_ROUTE,
    ADD_CONSULTATION_ROUTE,
    ADD_INDEX_CONSULTATION_ROUTE
  } from '../../constants/app_utils';
  

function CellItem(props) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: props.deleted ? "#ef9a9a" : ""
        }}
      >
        {props.item || typeof props.item === "number"
          ? props.item
          : props.children}
      </div>
    );
  }
export class ManageFiles extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
                userIdEdit:null,
                fileDataEdit:null,
                consultaionDataAdd:null,
                consultationIdEdit:null
          
        
        }
    }
  
    setEditFile = (userId, fileData)=>{
        this.setState({
            fileDataEdit: fileData,
            userIdEdit: userId
        }, ()=>{
            this.props.history.push(EDIT_CONSULTATION_ROUTE)
            setTimeout(() => {
                window.scrollTo(0,0);
            }, 25);
        });
    }
    setAddConsultation  = (consultationId,consultationDatas) =>{
      this.setState({
        consultaionDataAdd: consultationDatas,
        consultationIdEdit: consultationId
    }, ()=>{
        this.props.history.push(ADD_CONSULTATION_ROUTE)
        setTimeout(() => {
            window.scrollTo(0,0);
        }, 25);
    });
      
    }

    render() {
        console.log('testrr',this.state.consultaionDataAdd)
        return (
            <div>
              <ListsView 
                editData ={this.state.fileDataEdit}
                addData={this.state.consultaionDataAdd}
              datas={this.props.datas}
              // prop1={this.props}
              gsanguin = {[{id:1,name:'gsanguin',label:'A-'},{id:2,name:'gsanguin',label:'B-'},{id:3,name:'gsanguin',label:'o-'},{id:4,name:'gsanguin',label:'AB-'},{id:5,name:'gsanguin',label:'o+'},{id:6,name:'gsanguin',label:'A+'},{id:7,name:'gsanguin',label:'B+'},{id:8,name:'gsanguin',label:'AB+'}]}
              rhesus ={[{id:1,name:'rhesus',label:"rhesus +"}, {id:2,name:'rhesus',label:'rhesus-'}]}
              sexe={[{id:1,label:'Homme',name:'sexe'},{id:2,label:'Femme',name:'sexe'}]}
              cartes={this.props.cartes}
                columns={[
                    {
                      Header: "Photo",
                      accessor: "img",
                      Cell: props => (
                        <CellItem
                          deleted={
                            this.props.isDeletedPickupArea &&
                            this.props.deletingPickupAreaId == props.original.id
                          }
                          item={<img style={{borderRadius:'50%' ,width:'40px',height:'40px'}} src={props.value}/>}
                        />
                      )
                    },
                    {
                      Header: "Nom Complet",
                      accessor: "fullName",
                      Cell: props => (
                        <CellItem
                          deleted={
                            this.props.isDeletedPickupArea &&
                            this.props.deletingPickupAreaId == props.original.id
                          }
                          item={props.value}
                        />
                      )
                    },
                    {
                      Header: "Metier",
                      accessor: "position",
                      Cell: props => (
                        <CellItem
                          deleted={
                            this.props.isDeletedPickupArea &&
                            this.props.deletingPickupAreaId == props.original.id
                          }
                          item={props.value}
                        />
                      )
                    },                  
                    {
                      Header: "Actions",
                      Cell: props => (
                        <span>
                             <PlusCircle
                            style={{cursor:'pointer'}}
                            size={18}
                            className="mr-2 hand-cursor"
                            color="green"
                            onClick={()=>this.setAddConsultation(props.original.id, props.original)}
                          />
                          <Edit
                            style={{cursor:'pointer'}}
                            size={18}
                            className="mr-2 hand-cursor"
                            color="#1565C0"
                            onClick={()=>this.setEditFile(props.original.id, props.original)}
                          />
                       
                          
                          {(this.props.isDeletingConsultation ||
                            this.props.isDeletedConsultation) &&
                          this.props.deletingConsultationId == props.original.id ? (
                            <Loader
                              size={18}
                              className="hand-cursor animate-spin"
                              color="#FF586B"
                            />
                          ) : (
                            <Trash2
                              size={18}
                              className="hand-cursor"
                              color="#FF586B"
                            //   onClick={() => this.deletePickupArea(props.original.id)}
                            />
                            
                          )}
                        </span>
                      ),
                      width: 100,
                      filterable: false,
                      sortable: false
                    }
                  ]}
              />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('etat',state)
    return{
        datas:state.file.patientsToFile,
      
    }

}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(ManageFiles)

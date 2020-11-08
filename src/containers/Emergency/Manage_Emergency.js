import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EmercenceProfile from '../../components/pages/Emergency'
import ModalAdviseConsulation from '../../components/pages/modal/modalAdviseConsultation.js'
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
export class ManageEmergency extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
                userIdEdit:null,
                fileDataEdit:null,
                consultaionDataAdd:null,
                consultationIdEdit:null,
                onShow:false
          
        
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

        handleModal = () => {
            this.setState({
            onShow: !this.state.onShow,
            });
        };
    render() {
        console.log('testrr',this.state.consultaionDataAdd)
        return (
            <div>
              <EmercenceProfile 
                editData ={this.state.fileDataEdit}
                addData={this.state.consultaionDataAdd}
              datas={this.props.datas}
              // prop1={this.props}
              />

        <ModalAdviseConsulation
          title="Demander une autorisation"
          onShow={this.handleModal}
          show={this.state.onShow}
          submit ={this.handleSubmitModal}
          datas={this.state.datas}
          type = 'patient'

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

export default connect(mapStateToProps)(ManageEmergency)

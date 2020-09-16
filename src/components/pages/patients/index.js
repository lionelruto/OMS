import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import ManagePatients from "./manage_patients";
import ListPatients from "./patients";
import {Route} from "react-router-dom";
import {ADD_PATIENT_ROUTE, EDIT_PATIENT_ROUTE} from "../../../constants/app_utils";

// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class DriverManagementView extends React.Component {
constructor(props) {
    super(props)

    this.state = {
      showUserEdit:false
    }
}
handleToggleUserEdit = (toggleState)=>{
  this.setState({
      showUserEdit: toggleState
  });
}
handleSubmitPatientData = (userData, userId, callback)=>{
  this.props.submitPatientData(userData, userId, callback);
}
render(){
  console.log(this.props)
  return (
      <Fragment>
          <div>
              <Route
                  exact
                  path={ADD_PATIENT_ROUTE}
                  render={matchprops => (
                      <ManagePatients 
                          {...this.props} 
                          {...matchprops}
                          editData={null}
                          submitPatientData={this.handleSubmitPatientData} />
                  )}
              />
              <Route
                  exact
                  path={EDIT_PATIENT_ROUTE}
                  render={matchprops => (
                      <ManagePatients 
                          {...this.props} 
                          {...matchprops}
                          editData={this.props.editData}
                          submitPatientData={this.handleSubmitPatientData} />
                  )}
              />
              <ListPatients {...this.props} />
          </div>
      </Fragment>
  )
}
}
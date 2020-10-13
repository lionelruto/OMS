import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import ManageConsultation from "./manage_consultation";
import ListConsultation from "./consultation";
import {Route} from "react-router-dom";
import {ADD_CONSULTATION_ROUTE, EDIT_CONSULTATION_ROUTE} from "../../../constants/app_utils";

// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class ConsultationMangementIndex extends React.Component {
constructor(props) {
    super(props)

    this.state = {
      showFileEdit:false
    }
}
handleToggleFileEdit = (toggleState)=>{
  this.setState({
      showFileEdit: toggleState
  });
}
handleSubmitDatas = (Datas, FileId, callback)=>{
  this.props.submitDatas(Datas, FileId, callback);
}
render(){
  console.log(this.props)
  return (
      <Fragment>
          <div>
              <Route
                  exact
                  path={ADD_CONSULTATION_ROUTE}
                  render={matchprops => (
                      <ManageConsultation 
                          {...this.props} 
                          {...matchprops}
                          editData={null}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
              <Route
                  exact
                  path={EDIT_CONSULTATION_ROUTE}
                  render={matchprops => (
                      <ManageConsultation 
                          {...this.props} 
                          {...matchprops}
                          editData={this.props.editData}
                          addData ={null}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
              <ListConsultation {...this.props} />
          </div>
      </Fragment>
  )
}
}
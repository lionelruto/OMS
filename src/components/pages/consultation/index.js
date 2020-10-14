import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import ManageConsultation from "./manage_consultation";
import AnalyseConsultaion from './steps/analyse'
import EnqueteSystem from './steps/Enquete_systeme'
import Hypothse from './steps/Hypothese_diagnostique'
import ExmenPhysique from './steps/examens_physique'
import IndexConsultation from './steps/index'


import ListConsultation from "./consultation";
import {Route} from "react-router-dom";
import {ADD_CONSULTATION_ROUTE, EDIT_CONSULTATION_ROUTE,ANALYSE_CONSULTATION_ROUTE,ENQUETE_CONSULTATION_ROUTE,EXAMEN_PHYSIQUE_CONSULTATION_ROUTE,HYPOTHSE_CONSULTATION_ROUTE, ADD_INDEX_CONSULTATION_ROUTE} from "../../../constants/app_utils";

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
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
               <Route
                  exact
                  path={ANALYSE_CONSULTATION_ROUTE}
                  render={matchprops => (
                      <AnalyseConsultaion 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
               <Route
                  exact
                  path={ENQUETE_CONSULTATION_ROUTE}
                  render={matchprops => (
                      <EnqueteSystem 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
               <Route
                  exact
                  path={EXAMEN_PHYSIQUE_CONSULTATION_ROUTE}
                  render={matchprops => (
                      <ExmenPhysique 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
               <Route
                  exact
                  path={HYPOTHSE_CONSULTATION_ROUTE}
                  render={matchprops => (
                      <Hypothse 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
                    <Route
                  exact
                  path={ADD_INDEX_CONSULTATION_ROUTE}
                  render={matchprops => (
                      <IndexConsultation 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
              <ListConsultation {...this.props} />
          </div>
      </Fragment>
  )
}
}
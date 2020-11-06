import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import User_DMP from "./User_DMP.js";
import IndexDMP from './DMP_steps/index';
import IndexConst from './DMP_steps/index';
import Consultations from './DMP_steps/Consultations.js';
import Hospitalisations from './DMP_steps/Hospitalisations.js';
import AnalysesBio from './DMP_steps/AnalysesBio.js';
import AnalysesRadio from './DMP_steps/AnalysesRadio.js';

import {Route} from "react-router-dom";
import {USER_DMP,
     USER_CONSULTATION,
     USER_HOSPITALISATION,
     USER_BIOLOGICAL_EXAM,
     USER_RADIO_EXAMS} from "../../../constants/app_utils";

// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class DMP extends React.Component {
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
                  path={USER_DMP}
                  render={matchprops => (
                      <User_DMP 
                          {...this.props} 
                          {...matchprops}
                          editData={null}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
              <Route
                  exact
                  path={USER_CONSULTATION}
                  render={matchprops => (
                      <Consultations 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
               <Route
                  exact
                  path={USER_HOSPITALISATION}
                  render={matchprops => (
                      <Hospitalisations 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
               <Route
                  exact
                  path={USER_BIOLOGICAL_EXAM}
                  render={matchprops => (
                      <AnalysesBio 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
               <Route
                  exact
                  path={USER_RADIO_EXAMS}
                  render={matchprops => (
                      <AnalysesRadio 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
          </div>
      </Fragment>
  )
}
}
import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import ProfessionalsList from "./ProfessionalsList.js";

import {Route} from "react-router-dom";
import {USER_HEALTHDATA, USER_HEALTHPRO} from "../../../constants/app_utils";

// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class index extends React.Component {
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
                  path={USER_HEALTHPRO}
                  render={matchprops => (
                      <ProfessionalsList 
                          {...this.props} 
                          {...matchprops}
                          editData={null}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />

          </div>
      </Fragment>
  )
}
}
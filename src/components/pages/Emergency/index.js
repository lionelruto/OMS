import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import EmercencyProfile from "./EmercencyProfile.js";
import UserEmercency from "./UserEmercency.js";


import {Route} from "react-router-dom";
import {USER_EMERGENCYPROFILE} from "../../../constants/app_utils";

// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class EmercenceProfile extends React.Component {
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
              {/**
               * 
              <Route
                  exact
                  path={USER_EMERGENCYPROFILE}
                  render={matchprops => (
                      <EmercencyProfile 
                          {...this.props} 
                          {...matchprops}
                          editData={this.props.editData}
                          submitFileData={this.handleSubmitFileData} />
                  )}
              />
               */}

              <UserEmercency {...this.props} />
          </div>
      </Fragment>
  )
}
}
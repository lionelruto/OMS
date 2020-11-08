import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import User_Profile from "./User_Profile.js";
import Perso_Profile from './Perso_Profile.js';

import {Route} from "react-router-dom";
import {USER_PROFILE, PERSO_PROFILE} from "../../../constants/app_utils";
export default class ProfileMangementIndex extends React.Component {
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
                  path={PERSO_PROFILE}
                  render={matchprops => (
                      <Perso_Profile 
                          {...this.props} 
                          {...matchprops}
                          addData={this.props.addData}
                          submitDatas={this.handleSubmitDatas} />
                  )}
              />
                    <Route
                  exact
                  path={USER_PROFILE}
                  render={matchprops => (
                      <User_Profile      
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
import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import ManageFiles from "./manager_file";
import ListFile from "./file";
import {Route} from "react-router-dom";
import {ADD_FILE_ROUTE, EDIT_FILE_ROUTE} from "../../../constants/app_utils";

// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class FileMangementIndex extends React.Component {
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
handleSubmitFileData = (FileData, FileId, callback)=>{
  this.props.submitFileData(FileData, FileId, callback);
}
render(){
  console.log(this.props)
  return (
      <Fragment>
          <div>
              <Route
                  exact
                  path={ADD_FILE_ROUTE}
                  render={matchprops => (
                      <ManageFiles 
                          {...this.props} 
                          {...matchprops}
                          editData={null}
                          submitFileData={this.handleSubmitFileData} />
                  )}
              />
              <Route
                  exact
                  path={EDIT_FILE_ROUTE}
                  render={matchprops => (
                      <ManageFiles 
                          {...this.props} 
                          {...matchprops}
                          editData={this.props.editData}
                          submitFileData={this.handleSubmitFileData} />
                  )}
              />
              <ListFile {...this.props} />
          </div>
      </Fragment>
  )
}
}
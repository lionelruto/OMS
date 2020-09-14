import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import ManageUser from "./manage_user";
import ListUser from "./user";
import {Route} from "react-router-dom";
import {ADD_USER_ROUTE, EDIT_USER_ROUTE} from "../../../constants/app_utils";

// import UserManage from "./manage_Users";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/Users/index.js
export default class UserManagementView extends React.Component {
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
handleSubmitUserData = (userData, userId, callback)=>{
  this.props.submitUserData(userData, userId, callback);
}
render(){
  console.log(this.props)
  return (
      <Fragment>
          <div>
              <Route
                  exact
                  path={ADD_USER_ROUTE}
                  render={matchprops => (
                      <ManageUser 
                          {...this.props} 
                          {...matchprops}
                          editData={null}
                          submitUserData={this.handleSubmitUserData} />
                  )}
              />
              <Route
                  exact
                  path={EDIT_USER_ROUTE}
                  render={matchprops => (
                      <ManageUser 
                          {...this.props} 
                          {...matchprops}
                          editData={this.props.editData}
                          submitUserData={this.handleSubmitUserData} />
                  )}
              />
              <ListUser {...this.props} />
          </div>
      </Fragment>
  )
}
}
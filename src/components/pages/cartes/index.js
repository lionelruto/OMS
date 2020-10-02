import React, { Fragment,Suspense  } from "react";
import "react-table/react-table.css";
import ManageCartes from "./manage_cartes";
import ListCartes from "./cartes";
import {Route} from "react-router-dom";
import {ADD_CARTE_ROUTE, EDIT_CARTE_ROUTE} from "../../../constants/app_utils";

// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class CarteMangementIndex extends React.Component {
constructor(props) {
    super(props)

    this.state = {
      showCarteEdit:false
    }
}
handleToggleCarteEdit = (toggleState)=>{
  this.setState({
      showcarteEdit: toggleState
  });
}
handleSubmitCarteData = (carteData, carteId, callback)=>{
  this.props.submitCarteData(carteData, carteId, callback);
}
render(){
  console.log(this.props)
  return (
      <Fragment>
          <div>
              <Route
                  exact
                  path={ADD_CARTE_ROUTE}
                  render={matchprops => (
                      <ManageCartes 
                          {...this.props} 
                          {...matchprops}
                          editData={null}
                          submitCarteData={this.handleSubmitCarteData} />
                  )}
              />
              {/* <Route
                  exact
                  path={EDIT_CARTE_ROUTE}
                  render={matchprops => (
                      <ManageCartes 
                          {...this.props} 
                          {...matchprops}
                          editData={this.props.editData}
                          submitCarteData={this.handleSubmitCarteData} />
                  )}
              /> */}
              <ListCartes {...this.props} />
          </div>
      </Fragment>
  )
}
}
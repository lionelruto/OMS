import React, { Fragment } from "react";
import "react-table/react-table.css";
import ManagePatients from "./manage_patients";
import ListPatients from "./patients";

// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class DriverManagementView extends React.Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
}

  render() {
    
    return (
      <Fragment>
        <div>
          <ManagePatients {...this.props}/>

          <ListPatients {...this.props}/>
        </div>
      </Fragment>
    );
  }
}

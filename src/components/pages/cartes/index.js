import React, { Fragment } from "react";
import "react-table/react-table.css";
import ManageCartes from "./manage_cartes";
import Cartes from "./cartes";

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
          <ManageCartes {...this.props}/>

          <Cartes {...this.props}/>
        </div>
      </Fragment>
    );
  }
}

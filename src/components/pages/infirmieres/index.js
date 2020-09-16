import React, { Fragment } from "react";
import "react-table/react-table.css";
import Main from "./main";
// import DriverManage from "./manage_drivers";
// Regarder sur le backoffice pour gerer les differentes routes de l'infirmiere src/components/drivers/index.js
export default class DriverManagementView extends React.Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
}

  render() {
    console.log('tesdt',this.props)
    return (
      <Fragment>
        <div>
          
          <Main {...this.props} />
        </div>
      </Fragment>
    );
  }
}

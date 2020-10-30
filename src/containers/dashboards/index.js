import React, { Component, Fragment } from 'react';
// import Clients from './Clients_Chart';
// import Drivers from './Drivers_Chart';
// import MonthStat from './month';
// import RequestAborted from './request_aborted_chart';
// import RequestCancelled from './request_cancelled_chart';
// import RequestTerminated from './request_terminate_chart';
import { Row, Col, Button, FormGroup, Label ,UncontrolledAlert} from 'reactstrap';
import DatePicker from 'reactstrap-date-picker';

// import { toastr } from 'react-redux-toastr';

import Box from './box';
import Bar from './bar'
var moment = require('moment-timezone');

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: moment(new Date().toISOString())
        .subtract(1, 'y')
        .format('YYYY-MM-DD'),
      end_date: moment(new Date().toISOString()).format('YYYY-MM-DD'),  
    };
    this.driver = React.createRef()
  }
  submitInput=()=>{
    // this.driver.current.submitInputDriverData(this.state.start_date,this.state.end_date)
    // console.log(this.driver.current);
    console.log(this.state)
  }
  handleStartDateChange=(e,formatedDate)=>{
    // console.log('test:',e,formatedDate)
      {/* moment.tz(props.value, "Africa/Douala").format("DD/MM/YY hh:mm") */}
      this.setState(
        {
          start_date:formatedDate
        }
      )
  }
  handleEndDateChange=(e,formatedDate)=>{
    // console.log('test:',e)
      {/* moment.tz(props.value, "Africa/Douala").format("DD/MM/YY hh:mm") */}
      this.setState(
        {
          end_date:formatedDate
        }
      )
  }
  render() {
    
    return (
      <div>
        {/* Statistics */}
        <h1
          style={{ marginTop: '0' }}
          className="match-parent centered-content"
        >
          Liste de mes Activitées
        </h1>
        <Box />
        /*<Row>
                <Col md="4">
                  <FormGroup>
                    <Label for="issueinput3">Start Date</Label>
                    <DatePicker
                      id="start"
                      value={this.state.start_date}
                      onChange={this.handleStartDateChange}
                      dateFormat="YYYY-MM-DD"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label for="issueinput4">End Date</Label>
                    <DatePicker
                      id="end"
                      value={this.state.end_date}
                      onChange={this.handleEndDateChange}
                      dateFormat="YYYY-MM-DD"
                    />
                  </FormGroup>
                </Col>
          </Row>
          */

          //<Bar/>
          {/* <Patients 
          start_date={this.state.start_date}
          end_date ={this.state.end_date}
          /> 
       */}
      </div>
    );
  }
}

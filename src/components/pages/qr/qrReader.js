import React, { Component } from 'react';
// import dynamic from 'next/dynamic'
import QrReader from 'react-qr-reader';
import {
  Card,
  Col,
  CardBody,
  Input,
  Button,
  Row,
  Form,
  CardHeader,
  Label,
  FormGroup,
  Modal,
} from 'reactstrap';

import {

  APP_COLOR2,

} from '../../../constants/app_utils';

class QrRead extends Component {
  state = {
    result: this.props.qrvalue ? this.props.qrvalue : 'Nothing',
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  handleChange = e =>{
    this.props.submitQr(e.target.value)
  }
componentWillReceiveProps(nextProps){
  // if(this.state.result !==nextProps.qrvalue )
  this.setState({
    resultat: this.state.result !==nextProps.qrvalue ? nextProps.qrvalue :this.state.result
  })
}
  render() {
    console.log('test', this.state.result);
    return (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <QrReader
            style={{ height: '250px', width: '250px' }}
            onError={this.handleError}
            onScan={this.handleScan}
          /> 
          <Label for="Patientinput3" sm={4}>
            valeur du QR:
          </Label>
          <FormGroup row style={{ width: '100%',display:'flex' ,alignItems:'center',justifyContent:'center'}}>
          <Col sm={8}>
            <p style={{textAlign:'center'}}>{this.state.result}</p>
            <hr className={APP_COLOR2} style={{width:'100%',height:'5px'}}/>
          </Col>
        </FormGroup>
        </div>
       
      </div>
    );
  }
}

export default QrRead;

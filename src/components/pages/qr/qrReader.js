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

class QrRead extends Component {
  state = {
    result: this.props.qrvalue ? this.props.qrvalue : 'Nothing'
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
    console.log('test',this.state.result)
    return (
      <div style={{display:'flex',flexDirection:'column',alignContent:'center',alignItems:'center'}}>
     
        <Row md='12' style={{marginBottom:'5px'}}>
          <QrReader
            style={{ height: '250px', width: '250px'}}
            onError={this.handleError}
            onScan={this.handleScan}
   
          />
          </Row>
          <Row md="12"      style={{width:'100%'}}>
            <FormGroup row>
              <Label for="Patientinput3" sm={4}>
                valeur du QR:
              </Label>
              <Col sm={8}>
                <Input
                type='text'
                style={{width:'100%'}}
                value={this.state.result}
                onChange={this.handleChange}
          
                />
              
              </Col>
            </FormGroup>
          </Row>

  
    

     
      </div>
    );
  }
}

export default QrRead;

import React, { Component } from 'react';
// import dynamic from 'next/dynamic'
import QrReader from 'react-qr-reader';
import toastr from 'react-redux-toastr';
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
          <Button outline color="success" size="lg" style={{marginTop:"3%"}} onClick={() => toastr.success('The title', 'The message', { position: 'top-left'}, { transitionIn: 'bounceIn', transitionOut: 'bounceOut' })}>
            Vérifier le QR
          </Button>
        </div>
       
      </div>
    );
  }
}

export default QrRead;

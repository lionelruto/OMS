import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import QRreader from "../../qr/qrReader.js"

export default class Step2 extends Component {
   state = {};

   componentDidMount() {}

   componentWillUnmount() {}

   // not required as this component has no forms or user entry
   // isValidated() {}

   render() {
      return (
         <Row style={{display:"flex", alignItems:"center"}} >
             <Col lg={12} md={12} sm={12} >
                <QRreader/>                     
             </Col>
         </Row>
      );
   }
}
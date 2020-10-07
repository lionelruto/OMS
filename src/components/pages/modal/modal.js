import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup,Row,Col } from 'reactstrap';
import QrReader from '../qr/qrReader';
import { X, Check, RefreshCw, Eye, EyeOff } from 'react-feather';

import {
    APP_COLOR, APP_COLOR2,
  } from '../../../constants/app_utils';
const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    title,
    body,
    show,
    submit,
    datas
  } = props;
  const [modal, setModal] = useState(false);
  const [show1, setShow] = useState(false);
const [qrValue, setqrValue] = useState(12345620)
 
  useEffect(() => {
  setShow(show)
  // setqrValue(12345620)
}, [show])
  const toggle = () => setModal(!modal);

 const handleTogle = (e) =>{
     props.onShow(e)
 }
 const handleSubmit = ( ) =>{
  props.submit()
}




  return (
    <div>
      <Modal isOpen={show1} toggle={handleTogle} >
  <ModalHeader toggle={handleTogle}>{title}</ModalHeader>
        <ModalBody style={{alignItems:'center',alignContent:'center'}}>
        
             <QrReader qrvalue = {qrValue}/>
     
        </ModalBody>
        <ModalFooter>
          <Row>
            <Col md='6'> {datas !== null ? <Check size={25} color="green" /> :  <X size={25} color="red"/> } </Col>
            <Col md='6'> <Button className={APP_COLOR2} onClick={handleSubmit}>Verifier</Button>{' '}</Col>
          </Row>
         
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
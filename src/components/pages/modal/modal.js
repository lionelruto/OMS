import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup,Row } from 'reactstrap';
import QrReader from '../qr/qrReader';
import {
    APP_COLOR, APP_COLOR2,
  } from '../../../constants/app_utils';
const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    title,
    body,
    show
  } = props;
  const [modal, setModal] = useState(false);
  const [show1, setShow] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);
  useEffect(() => {
  setShow(show)
}, [show])
  const toggle = () => setModal(!modal);

 const handleTogle = (e) =>{
     props.onShow(e)
 }



  return (
    <div>
      <Modal isOpen={show1} toggle={handleTogle} >
  <ModalHeader toggle={handleTogle}>{title}</ModalHeader>
        <ModalBody style={{alignItems:'center',alignContent:'center'}}>
        
             <QrReader/>
     
        </ModalBody>
        <ModalFooter>
          <Button className={APP_COLOR2} onClick={handleTogle}>Verifier</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
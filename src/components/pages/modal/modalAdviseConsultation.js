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
    datas,
    type
  } = props;
  const [modal, setModal] = useState(false);
  const [show1, setShow] = useState(false);
const [qrValueC, setqrValueC] = useState(1)
const [qrValueP, setqrValueP] = useState(12345620)
 
  useEffect(() => {
  setShow(show)
  // setqrValueC(12345620)
}, [show])
  const toggle = () => setModal(!modal);

 const handleTogle = () =>{
     props.onShow()
 }
 const handleSubmitP = ( ) =>{
  props.submit(qrValueP)
}
const handleSubmit = ( ) =>{
  props.submit()
}


const onQrChange = (e)=>{
setqrValueC(e)
}


  return (
    <div>
      <Modal isOpen={show1} toggle={handleTogle} >
  <ModalHeader toggle={handleTogle}>{title}</ModalHeader>
        <ModalBody style={{alignItems:'center',alignContent:'center'}}>
          Voulez-vous envoyer  une notification au client pour{' '} 
          Avoir son accord sur la consultation de son dossier medical ?
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Confirmer</Button>{' '}
          <Button color="primary" onClick={toggle}>Annuler</Button>        
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;

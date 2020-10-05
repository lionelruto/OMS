import React, { useState,useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup,Row } from 'reactstrap';
import QrReader from '../qr_reader/qrReader'
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
      <Form inline onSubmit={(e) => e.preventDefault()}>
    
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      </Form>
      <Modal isOpen={show1} toggle={handleTogle} >
  <ModalHeader toggle={handleTogle}>{title}</ModalHeader>
        <ModalBody style={{alignItems:'center',alignContent:'center'}}>
        
             <QrReader/>
     
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleTogle}>Do Something</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
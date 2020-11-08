import React, { useState } from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Input,
  FormText,
  Label,
  Row,
  Col,
  CardHeader,
} from 'reactstrap';
import {
    Home,
    Mail,
    MessageSquare,
    ChevronRight,
    Aperture,
    Box,
    Edit,
    Grid,
    Layers,
    Sliders,
    Map,
    BarChart2,
    Calendar,
    Copy,
    Book,
    CheckSquare,
    LifeBuoy,
    Users,
    ChevronDown
 
 } from "react-feather";
 import {
    LIST_CONSULTATION_ROUTE,
    EDIT_CONSULTATION_ROUTE,
    ADD_CONSULTATION_ROUTE,
    APP_COLOR,
    APP_COLOR2,
  } from '../../../../constants/app_utils';

const divStyle = {
  margin: '1rem',
};
const pStyle ={
    color: 'black', 
    margin: '0.5rem', 
    cursor: 'pointer' ,
    Padding:'0.5rem',
    fontWeight:'bold'
}
const chevronStyle = {
    float:'rigth'
};
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isOpenResp, setIsOpenResp] = useState(false);
  const toggleResp = () => setIsOpenResp(!isOpenResp);
  const [isOpenDent, setIsOpenDent] = useState(false);
  const toggleDent = () => setIsOpenDent(!isOpenDent);
  const [isOpenNeuro, setIsOpenNeuro] = useState(false);
  const toggleNeuro = () => setIsOpenNeuro(!isOpenNeuro);
  const [isOpenBiolo, setIsOpenBiolo] = useState(false);
  const toggleBiolo = () => setIsOpenBiolo(!isOpenBiolo);
   const [isOpenVacci, setIsOpenVacci] = useState(false);
  const toggleVacci = () => setIsOpenVacci(!isOpenVacci);
  const [isOpenMeta, setIsOpenMeta] = useState(false);
  const toggleMeta = () => setIsOpenMeta(!isOpenMeta);
  const [isOpenLoco, setIsOpenLoco] = useState(false);
  const toggleLoco = () => setIsOpenLoco(!isOpenLoco);
  const [isOpenNeurolo, setIsOpenNeurolo] = useState(false);
  const toggleNeurolo = () => setIsOpenNeurolo(!isOpenNeurolo);
  const [isOpenDigest, setIsOpenDigest] = useState(false);
  const toggleDigest = () => setIsOpenDigest(!isOpenDigest);
  const [isOpenGeneco, setIsOpenGeneco] = useState(false);
  const toggleGeneco = () => setIsOpenGeneco(!isOpenGeneco);
  const [isOpenOrl, setIsOpenOrl] = useState(false);
  const toggleOrl = () => setIsOpenOrl(!isOpenOrl);
  return (
    <div>

        <Card>
            <CardHeader style={{textAlign:'center'}}>Liste des antecedents Medicaux</CardHeader>
          <CardBody>
              <div style={{cursor:'pointer'}}>
                <p
                color="primary"
                onClick={toggle}
                style={pStyle}
                >
            Appareil Cardiaque  
            <span style ={{float:'right'}} > {isOpen ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
            <hr />

              </div>      
          <Collapse isOpen={isOpen}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Malaise ou perte de connaissance
                    </Label>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Palpitations
                    </Label>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Opression ou douleurs thoraciques 
                    </Label>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Dyspnée,toux
                    </Label>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Valvulopathies
                    </Label>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Hypertension artérielle: </FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText> Maladies thromboemboliques: </FormText>
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Autre maladie cardiaque:</FormText>
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            </Collapse>


            <p
        color="primary"
        onClick={toggleResp}
        style={pStyle}
      >
       Appareil Respiratoire
       <span style ={{float:'right'}} > {isOpenResp ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenResp}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Pneumothorax:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Asthme</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Infection du poumon ou de la plèvre:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Autre maladie respiratoir</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
       
            </Collapse>
            <p
        color="primary"
        onClick={toggleDent}
        style={pStyle}
      >
     Dents
       <span style ={{float:'right'}} > {isOpenDent ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenDent}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Odontalgie:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Prothèse mobile</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            </Collapse>

            <p
        color="primary"
        onClick={toggleNeuro}
        style={pStyle}
      >
     Neuro Psychique
       <span style ={{float:'right'}} > {isOpenNeuro ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenNeuro}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Affection psychiatrique
:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Manifestations anxio-dépressives</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Utilisation de psychotrope:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}

              </Col>
            </Row>
            </Collapse>
            <p
        color="primary"
        onClick={toggleBiolo}
        style={pStyle}
      >
     Anomalie Biologique
       <span style ={{float:'right'}} > {isOpenBiolo ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenBiolo}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Trouble de la crasse sanguine:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
             
              </Col>
            </Row>
            </Collapse>
            <p
        color="primary"
        onClick={toggleVacci}
        style={pStyle}
      >
     Status Vaccinal
       <span style ={{float:'right'}} > {isOpenVacci ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenVacci}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Tétanos, Polio, Hépatite B:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
             
              </Col>
            </Row>
            </Collapse>
            <p
        color="primary"
        onClick={toggleMeta}
        style={pStyle}
      >
    Maladie Metabolique
       <span style ={{float:'right'}} > {isOpenMeta ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenMeta}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Diabete:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
             
              </Col>
            </Row>
            </Collapse>
            <p
        color="primary"
        onClick={toggleLoco}
        style={pStyle}
      >
     Appareil locomoteur
       <span style ={{float:'right'}} > {isOpenLoco ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenLoco}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Sciatalgie:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
             
              </Col>
            </Row>
            </Collapse>
            <p
        color="primary"
        onClick={toggleNeurolo}
        style={pStyle}
      >
       Neurologique
       <span style ={{float:'right'}} > {isOpenNeurolo ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenNeurolo}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Epilepsie:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>AVC où AIT à répétition</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Traumatisme crânien grave:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Autre pathologie neurologique</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
       
            </Collapse>
            <p
        color="primary"
        onClick={toggleDigest}
        style={pStyle}
      >
    Digestion
       <span style ={{float:'right'}} > {isOpenDigest? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenDigest}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Reflux:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Autre trouble digestif</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            </Collapse>
            <p
        color="primary"
        onClick={toggleGeneco}
        style={pStyle}
      >
    Geneco Obstetrique
       <span style ={{float:'right'}} > {isOpenGeneco ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenGeneco}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Grossesse en cours:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
             
              </Col>
            </Row>
            </Collapse>
            <p
        color="primary"
        onClick={toggleOrl}
        style={pStyle}
      >
    ORL
       <span style ={{float:'right'}} > {isOpenOrl ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
      <hr />
      
          <Collapse isOpen={isOpenOrl}>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Vertiges:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Troubles de l’audition</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText> Otalgie dysbarique:</FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Episodes infectieux à répétition: </FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Atteinte des tympans: </FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Atteinte du nez, des fosses nasales où des sinus: </FormText>{' '}
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                {' '}
                <div style={divStyle}>
                  <FormText>Autre pathologie ORL: </FormText>
                  <Input placeholder="Observation" />{' '}
                </div>
              </Col>
              <Col md="6">
                {' '}
              
              </Col>
            </Row>
            </Collapse>

          </CardBody>
        </Card>
     
    </div>
  );
};

export default Example;

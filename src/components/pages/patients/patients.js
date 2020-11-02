import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Card, Col, CardBody, Input, Button, Row, Form, InputGroup, InputGroupAddon, FormGroup, Label, CardTitle } from 'reactstrap';
import ContentHeader from '../../contentHead/contentHeader';
import CreateableSelect from 'react-select';
import { Edit, Trash2, Trash, PlusCircle, Loader, Plus } from 'react-feather';
import NavbarSearch from '../../../components/search/Search';
import { Search } from 'react-feather';
import { withRouter } from 'react-router-dom';
import { RefreshCcw } from 'react-feather';
import userImage from '../../../assets/img/portrait/medium/avatar-m-1.png';

import {
  ADD_PATIENT_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE,
  LIST_PATIENT_ROUTE,
  ADD_CARTE_ROUTE,
  MAIN_VIEW_ROUTE,
  LIST_CARTE_ROUTE,
  APP_COLOR,
  APP_COLOR2,
} from '../../../constants/app_utils';

import Modal from '../modal/modal';
import QrReader from '../qr/qrReader';
class PatientsListe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQr: 'none',
      onShow: false,
      datas: null,
    };
  }

  handleCreateNewPatient = () => {
    this.props.history.push(ADD_PATIENT_ROUTE);
  };

  handleModal = () => {
    this.setState({
      onShow: !this.state.onShow,
    });
  };
  handleSubmitModal = (value)=>{
    console.log('valeur:',value)
   let  carte =  this.props.cartes && this.props.cartes.find(e=>e.SerialNumber === value)
   let patient = this.props.datas && this.props.datas.find(e=>e.carte.SerialNumber=== value)
   let val = [patient]

   if(carte !== undefined && carte.SerialNumber >0){
    this.setState({
      onShow: !this.state.onShow,
      datas:val
    });
    this.props.history.push(LIST_PATIENT_ROUTE) 

   }
   else{
     console.log('Not Found')
   }
  }
  
  render() {
    console.log('props:', this.state.datas);
    return (
      <div>
        <Row>
          <Col
            style={{
              float: 'right',
              display: 'block',
            }}
            md={12}
          >
            <div className="d-flex justify-content-between">
              <ContentHeader>Patient</ContentHeader>
              {this.props.location.pathname !== ADD_PATIENT_ROUTE && (
                <Button
                  className={APP_COLOR}
                  outline color="success"
                  style={{
                    float: 'right',
                    display: 'block',
                    
                  }}
                  onClick={this.handleCreateNewPatient}
                >
                  <Plus size={24} color="#fff"></Plus>
                </Button>
              )}
            </div>
            <hr
              className={APP_COLOR}
              style={{
                height: '2px',
              }}
            />
          </Col>

          <Col md={12}>
            <Card>
              <CardBody >
                    <div style={{paddingTop:"4%"}}>
                        <Row>                          
                            <Col xm={6} md={6} sm={6} lg={6} style={{display:"flex", justifyContent:"flex-start"}} >
                                <div >
                                    <InputGroup >
                                        <Input
                                            id='search_patient'
                                            placeholder='Entrer le nom du patient'
                                            autoComplete='off'
                                            autoCorrect='off'
                                            autoCapitalize='off'                               
                                        />
                                        <InputGroupAddon addonType="append">
                                            <Button color="secondary"><Search/></Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>

                            </Col>
                            
                            <Col xm={6} md={6} sm={6} lg={6} style={{display:"flex", justifyContent:"flex-end"}}>
                                <div    >
                                    <Button className={APP_COLOR} onClick={this.handleModal} size="lg" block>
                                        Recherche par QR
                                    </Button>
                                </div>
                            </Col>                        
                            
                        </Row>                    
                    </div>



               { /* va contenir le resultat de la recherche faite par le personnel*/}

                <Card style={{marginTop:"4%"}}>
                    <h5>Informations sur le patient</h5> 
                        <hr
                        className={APP_COLOR}
                        style={{
                        height: '2px',
                        }}
                    />
                    <Row>
                        <Col xm={12} md={6} sm={12} lg={6}>                      
                            <img src={userImage} alt="logged-in-user" />
                        </Col>

                            { /* va contenir les infos basiques du patient*/}
                        <Col xm={12} md={6} sm={12} lg={6}>
                            <div>
                                <FormGroup row>
                                    <Label for="userinput3" sm={4}>
                                        Nom et Prenom :
                                    </Label>
                                    <Col sm={8}>
                                        <Input
                                        type="text"
                                        id="Nom_Prenom"
                                        className="border-primary"
                                        name="Nom_prenom"
                                        //value={this.state.quartier}
                                        //onChange={this.inputChanged}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="userinput3" sm={4}>
                                        Sexe :
                                    </Label>
                                    <Col sm={8}>
                                        <Input
                                        type="text"
                                        id="Sexe"
                                        className="border-primary"
                                        name="sexe"
                                        //value={this.state.quartier}
                                        //onChange={this.inputChanged}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="userinput3" sm={4}>
                                        Age :
                                    </Label>
                                    <Col sm={8}>
                                        <Input
                                        type="text"
                                        id="age"
                                        className="border-primary"
                                        name="age"
                                        //value={this.state.quartier}
                                        //onChange={this.inputChanged}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label for="userinput3" sm={4}>
                                        Nationalité :
                                    </Label>
                                    <Col sm={8}>
                                        <Input
                                        type="text"
                                        id="nation"
                                        className="border-primary"
                                        name="nation"
                                        //value={this.state.quartier}
                                        //onChange={this.inputChanged}
                                        />
                                    </Col>
                                </FormGroup>
                            </div>
                            {/*Bouttons de parametres viteaux ou fille d'attente */}
                            <Row>
                                <Col xm={6} md={6} sm={6} lg={6} style={{display:"flex", justifyContent:"flex-start"}}>
                                    <Button  color="primary" size="lg">
                                        Parametres vitaux
                                    </Button>
                                </Col>

                                <Col xm={6} md={6} sm={6} lg={6} style={{display:"flex", justifyContent:"flex-end"}}>
                                    <Button  color="primary" size="lg">
                                        fille d'attente
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal
          title="Scaner Une Carte"
          onShow={this.handleModal}
          show={this.state.onShow}
          submit ={this.handleSubmitModal}
          datas={this.state.datas}
          type = 'patient'

        />
      </div>
    );
  }
}

export default withRouter(PatientsListe);

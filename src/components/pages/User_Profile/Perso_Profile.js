import React, { Component } from 'react'
import ContentHeader from '../../contentHead/contentHeader'
import { Row, Input, FormGroup, Form, Col, Label, Card, CardBody, CustomInput } from 'reactstrap'
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import Toggle from "react-toggle";
import {RiHospitalLine} from 'react-icons/ri'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import IconButton from "@material-ui/core/IconButton";



export default class Perso_Profile extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
           
                userIdEdit:null,
                userDataEdit:null
          
        
        }
    }
  
    render(){
        return(
            <div>
                <ContentHeader>
                    Mon profile
                </ContentHeader>

                <Row>
                    <Col lg={8}>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={12}>
                                        {/**contenu des info perso et preferences */}
                                        <Row>
                                            <Col lg={12}>
                                                <p>Informations personnelles</p>
                                                <hr/>
                                            </Col>

                                            <Col lg={12}>
                                                <Row>
                                                    <Col >
                                                        <FormGroup row>
                                                            <Label for="Patientinput1" sm={4}>
                                                                Nom:
                                                            </Label>
                                                            <Col >
                                                                <Input
                                                                type="text"
                                                                id="Patientinput1"
                                                                placeholder="Fokou"
                                                                className="border-primary"
                                                                name="Nom"
                                                                disabled
                                                                //value={this.state.firstname}
                                                                //onChange={this.inputChanged}
                                                                />
                                                            </Col>
                                                        </FormGroup>{''}

                                                        <FormGroup row>
                                                            <Label for="Patientinput1" >
                                                                Nationalité:
                                                            </Label>
                                                            <Col >
                                                                <Input
                                                                type="text"
                                                                id="Patientinput1"
                                                                placeholder="Camerounaise"
                                                                className="border-primary"
                                                                name="Nom"
                                                                disabled
                                                                //value={this.state.firstname}
                                                                //onChange={this.inputChanged}
                                                                />
                                                            </Col>
                                                        </FormGroup>{''}

                                                        <FormGroup row>
                                                            <Label for="Patientinput1" >
                                                                Specialite:
                                                            </Label>
                                                            <Col >
                                                                <Input
                                                                type="text"
                                                                id="Patientinput1"
                                                                placeholder="Gynécologue"
                                                                className="border-primary"
                                                                name="Nom"
                                                                disabled
                                                                //value={this.state.firstname}
                                                                //onChange={this.inputChanged}
                                                                />
                                                            </Col>
                                                        </FormGroup>{''}                                     

                                                    </Col>

                                                    <Col lg={6}>

                                                        <FormGroup row>
                                                            <Label for="Patientinput1" >
                                                                Prenom:
                                                            </Label>
                                                            <Col >
                                                                <Input
                                                                type="text"
                                                                placeholder="Francis"
                                                                id="Patientinput1"
                                                                className="border-primary"
                                                                name="Nom"
                                                                disabled
                                                                //value={this.state.firstname}
                                                                //onChange={this.inputChanged}
                                                                />
                                                            </Col>
                                                        </FormGroup>{''}

                                                        <FormGroup row>
                                                            <Label for="Patientinput1" >
                                                                Metier:
                                                            </Label>
                                                            <Col >
                                                                <Input
                                                                type="text"
                                                                id="Patientinput1"
                                                                placeholder="Medecin"
                                                                className="border-primary"
                                                                name="Nom"
                                                                disabled
                                                                //value={this.state.firstname}
                                                                //onChange={this.inputChanged}
                                                                />
                                                            </Col>
                                                        </FormGroup>{''}

                                                        <p style={{color:'#5cb85c', cursor:'pointer', fontWeight:'bold', marginTop:'20px'}}>Changer mon mot de passe</p>
                                                    </Col>
                                                </Row>

                                            </Col>                            
                                        </Row>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>                    
                    </Col>

                    <Col lg={4}>
                        <Card style={{display:"flex", alignItems:"center", JustifyContent:"center"}}>
                            <CardBody style={{display:"flex", alignItems:"center", JustifyContent:"center"}}>
                                <Col lg={12} >
                                    {/**l'image de la photo */}
                                    <div >
                                    <img src={userImage} alt="logged-in-user" className="rounded-circle width-55" />
                                    </div>

                                    <hr/>     
                                    
                                    <div>
                                        <span style={{display: 'inline'}}><PhoneIcon />  </span>
                                        <div style={{display: 'inline-block'}}><p>237678987788</p></div>
                                    </div> 

                                    <div>
                                        <span style={{display: 'inline'}}><MailIcon />  </span>
                                        <div style={{display: 'inline-block'}}><p>samulio@yahoo.fe</p></div>
                                    </div> 

                                    <div>
                                        <span style={{display: 'inline'}}><FingerprintIcon />  </span>
                                        <div style={{display: 'inline-block'}}><p>098653622725627</p></div>
                                    </div> 
                                </Col>       
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Card>
                    <CardBody>
                        <Row>
                            <Col lg={12}>
                                <p>Mes lieux de services</p>
                                <hr/>
                            </Col>
                            <Col lg={12} >
                                <div>
                                    <span style={{display: 'inline'}}><RiHospitalLine />  </span>
                                    <div style={{display: 'inline-block'}}><p>Hopital des soeur</p></div>
                                </div>
                                    
                                   
                            </Col>
                        </Row>
                    </CardBody>
                </Card>                
            </div>


        )
    }
}
import React, { Component } from 'react'
import ContentHeader from '../../contentHead/contentHeader'
import { Row, Input, FormGroup, Form, Col, Label, Card, CardBody, CustomInput } from 'reactstrap'
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import Toggle from "react-toggle";


export default class User_Profile extends Component{
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

                <Card>
                    <CardBody>
                        <Row>
                            <Col lg={12} style={{display:"flex", alignItems:"center", JustifyContent:"center"}}>
                                {/**l'image de la photo */}
                                <div >
                                <img src={userImage} alt="logged-in-user" className="rounded-circle width-105" />
                                </div>
                            </Col>
                            <hr/>

                            <Col lg={12}>
                                {/**contenu des info perso et preferences */}
                                <Row>
                                    <Col lg={12}>
                                        <p>Informations personnelles</p>
                                        <hr/>
                                    </Col>

                                    <Col lg={12}>
                                        <Row>
                                            <Col lg={6}>
                                                <FormGroup row>
                                                    <Label for="Patientinput1" sm={4}>
                                                        Nom:
                                                    </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                        type="text"
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
                                                    <Label for="Patientinput1" sm={4}>
                                                        Nom:
                                                    </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                        type="text"
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
                                                    <Label for="Patientinput1" sm={4}>
                                                        Nom:
                                                    </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                        type="text"
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
                                                    <Label for="Patientinput1" sm={4}>
                                                        Nom:
                                                    </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                        type="text"
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
                                                    <Label for="Patientinput1" sm={4}>
                                                        Nom:
                                                    </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                        type="text"
                                                        id="Patientinput1"
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
                                                    <Label for="Patientinput1" sm={4}>
                                                        Identifiant:
                                                    </Label>
                                                    <Col sm={8}>
                                                        <Input
                                                        type="text"
                                                        id="Patientinput1"
                                                        className="border-primary"
                                                        name="Nom"
                                                        disabled
                                                        //value={this.state.firstname}
                                                        //onChange={this.inputChanged}
                                                        />
                                                    </Col>
                                                </FormGroup>{''}
                                            </Col>
                                        </Row>

                                    </Col>                            
                                </Row>

                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Row>
                            <Col lg={12}>
                                <p>Préférences</p>
                                <hr/>
                            </Col>
                            <Col>
                                <form ref="breakfastForm">

                                    {/* Disabled */}

                                    <div className="example">
                                    <div style={{ marginBottom: "8px" }}>
                                        <label>
                                             <Toggle
                                                defaultChecked={this.state.eggsAreReady}
                                                aria-label="No label"
                                                onChange={this.handleEggsChange}
                                            />
                                            <span className="label-text">Diabled, Unchecked</span>
                                        </label>
                                    </div>

                                    <div>
                                        <label>
                                             <Toggle
                                                defaultChecked={this.state.eggsAreReady}
                                                aria-label="No label"
                                                onChange={this.handleEggsChange}
                                            />
                                            <span className="label-text">Disabled, Checked</span>
                                        </label>
                                    </div>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>                
            </div>


        )
    }
}
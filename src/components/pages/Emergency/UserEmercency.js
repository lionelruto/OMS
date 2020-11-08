import React, { Component } from 'react'
import ContentHeader from '../../contentHead/contentHeader'
import { Row, Input, FormGroup, Form, Col, Label, Card, CardBody, CustomInput, CardTitle, Collapse,Button,FormText,
  CardHeader } from 'reactstrap'
import userImage from "../../../assets/img/portrait/small/avatar-s-1.png";
import Toggle from "react-toggle";
import {RiHospitalLine} from 'react-icons/ri'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import IconButton from "@material-ui/core/IconButton";
import { Plus, ChevronDown, ChevronRight } from 'react-feather';
import Select from "react-select";

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


export default class EmercenceProfile extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
           
                userIdEdit:null,
                userDataEdit:null,
                isOpen:false,
                setIsOpen:false,
            }

//const [isOpen, setIsOpen] = useState(false);
         
    }


  
    render(){
        const toggle = () => this.state.setIsOpen(!this.state.isOpen);   
        return(
            <div>
                <ContentHeader>
                    Mon profile d'urgence
                </ContentHeader>

                <Row>
                    <Col lg={7}>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={6} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Groupe sanguin:</p>
                                  
                                    </Col>
                                    <Col lg={6} style={{display:'flex', justifyContent:'flex-end'}}>
                                            <Select
                                            
                                            defaultValue={['red', 'blue']}
                                            isMulti
                                            name="colors"
                                            //options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />  
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Donneur d'organne:</p>
                                  
                                    </Col>
                                    <Col lg={6} style={{display:'flex', justifyContent:'flex-end'}}>
                                        <FormGroup>
                                            <div>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Oui" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Non" inline />
                                            </div>
                                        </FormGroup> 
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Diabetique:</p>
                                  
                                    </Col>
                                    <Col lg={6} style={{display:'flex', justifyContent:'flex-end'}}>
                                        <FormGroup>
                                            <div>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Oui" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Non" inline />
                                            </div>
                                        </FormGroup>  
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={4} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Asthme:</p>
                                  
                                    </Col>
                                    <Col lg={8} style={{display:'flex', justifyContent:'flex-end'}}>
                                        <FormGroup>
                                            <div>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Oui" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Non" inline />
                                            </div>
                                        </FormGroup>  
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Hypertension:</p>
                                  
                                    </Col>
                                    <Col lg={6} style={{display:'flex', justifyContent:'flex-end'}}>
                                        <FormGroup>
                                            <div>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Oui" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Non" inline />
                                            </div>
                                        </FormGroup>  
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Grossesse:</p>
                                  
                                    </Col>
                                    <Col lg={6} style={{display:'flex', justifyContent:'flex-end'}}>
                                            <Select
                                            
                                            defaultValue={['red', 'blue']}
                                            isMulti
                                            name="colors"
                                            //options={colourOptions}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                        />  
                                    </Col>
                                </Row>                                                                                                                                
                            </CardBody>
                        </Card>                    
                    </Col>

                    <Col lg={5} style={{color:'#0275d8'}}>
                        <Row>
                            <Col lg={12}>
                                <Row>
                                    <Col lg={8} style={{display:'flex',justifyContent:'flex-start'}}>
                                        <div>
                                            <span style={{display: 'inline'}}><PhoneIcon /></span>
                                            <div style={{display: 'inline-block'}}><p>Contacts en cas d'urgence</p></div>
                                        </div>   

                                    </Col >

                                    <Col lg={4} style={{display:'flex',justifyContent:'flex-end'}}>
                                        <Plus size={24} color="#0275d8"></Plus>                                        
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={12}>
                                <Card >
                                        <CardTitle></CardTitle>
                                        <CardBody >
                                            <Col lg={12} >
                                                <div>
                                                    <span style={{display: 'inline'}}><PhoneIcon />  </span>
                                                    <div style={{display: 'inline-block'}}><p>Lionel Dubois</p></div>
                                                    <div ><p>237678987788</p></div>
                                                    <hr/>
                                                </div> 

                                                <div>
                                                    <span style={{display: 'inline'}}><PhoneIcon />  </span>
                                                    <div style={{display: 'inline-block'}}><p>Brain Afesoh</p></div>
                                                    <div ><p>237678987788</p></div>
                                                    <hr/>
                                                </div> 
                                            </Col>       
                                        </CardBody>
                                    </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Card>
                    <CardBody>
                        <Row>
                            <Col lg={12}>
                                <Row>
                                    <Col lg={8} style={{display:'flex',justifyContent:'flex-start'}}>
                                        <div>
                                            <span style={{display: 'inline'}}><PhoneIcon /></span>
                                            <div style={{display: 'inline-block'}}><p>Mes antécedents</p></div>
                                        </div>   

                                    </Col >

                                    <Col lg={4} style={{display:'flex',justifyContent:'flex-end'}}>
                                        <Plus size={24} color="#0275d8"></Plus>                                        
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={12} >
                                <Card>
                                    <CardHeader style={{textAlign:'center'}}>Liste des antecedents Medicaux</CardHeader>
                                <CardBody>
                                    <div style={{cursor:'pointer'}}>
                                        <p
                                        color="primary"
                                        onClick={toggle}
                                        style={pStyle}
                                        >
                                    Antécédents medicaux 
                                    <span style ={{float:'right'}} > {this.state.isOpen ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
                                    <hr />
                                    </div>      
                                <Collapse isOpen={this.state.isOpen}>
                                    <Row>
                                    <Col lg="6">
                                        <p>Epatite</p>
                                    </Col>
                                    <Col lg="6" style={{display:'flex',justifyContent:'flex-end'}}>
                                        <Button color="primary">Ajouter</Button>
                                    </Col>
                                    </Row>
                                    </Collapse>
                                </CardBody>
                                </Card>                                   
                            </Col>
                        </Row>
                    </CardBody>
                </Card>                
            </div>


        )
    }
}
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
                isOpen3:false,
                isOpen2:false,
            }

//const [isOpen, setIsOpen] = useState(false);
         
    }


  
    render(){
        const toggle = () => this.setState({isOpen: !this.state.isOpen});   
        const toggle2 = () => this.setState({isOpen2: !this.state.isOpen2});   
        const toggle3 = () => this.setState({isOpen3: !this.state.isOpen3});   

        return(
            <div>
                <ContentHeader>
                    Mon profile d'urgence
                </ContentHeader>

                <Row>
                    <Col lg={7}>
                        <Row>
                            <Col lg={8} style={{display:'flex',justifyContent:'flex-start'}}>
                                <div>
                                    <span style={{display: 'inline'}}><PhoneIcon /></span>
                                    <div style={{display: 'inline-block'}}><p>Profil</p></div>
                                </div>   

                            </Col >
                        </Row>
                    </Col>

                    <Col lg={7}>
                        <Card>
                            <CardBody>
                                <Row style={{marginTop:'10px'}}>
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

                                <Row style={{marginTop:'10px'}}>
                                    <Col lg={6} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Donneur d'organne:</p>
                                  
                                    </Col>
                                    <Col lg={6} style={{display:'flex', justifyContent:'flex-end'}}>
                                        <FormGroup >
                                            <div style={{display:'flex'}}>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Oui" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Non" inline />
                                            </div>
                                        </FormGroup> 
                                    </Col>
                                </Row>

                                <Row style={{marginTop:'10px'}}>
                                    <Col lg={6} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Diabetique:</p>
                                  
                                    </Col>
                                    <Col lg={6} style={{display:'flex', justifyContent:'flex-end'}}>
                                        <FormGroup>
                                            <div style={{display:'flex'}}>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Oui" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Non" inline />
                                            </div>
                                        </FormGroup>  
                                    </Col>
                                </Row>

                                <Row style={{marginTop:'10px'}}>
                                    <Col lg={4} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Asthme:</p>
                                  
                                    </Col>
                                    <Col lg={8} style={{display:'flex', justifyContent:'flex-end'}}>
                                        <FormGroup>
                                            <div style={{display:'flex'}}>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Oui" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Non" inline />
                                            </div>
                                        </FormGroup>  
                                    </Col>
                                </Row>

                                <Row style={{marginTop:'10px'}}>
                                    <Col lg={6} >
                                        
                                            <p style={{display:'flex',justifyContent:'flex-start'}}>Hypertension:</p>
                                  
                                    </Col>
                                    <Col lg={6} style={{display:'flex', justifyContent:'flex-end'}}>
                                        <FormGroup>
                                            <div style={{display:'flex'}}>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Oui" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Non" inline />
                                            </div>
                                        </FormGroup>  
                                    </Col>
                                </Row>

                                <Row style={{marginTop:'10px'}}>
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

                    <Col lg={{ size: 4, offset: 1 }}  style={{color:'#0275d8'}}>
                        <Row>
                            <Col lg={12}>
                                <Row>
                                    <Col lg={8} style={{display:'flex',justifyContent:'flex-start'}}>
                                        <div>
                                            <span style={{display: 'inline'}}><PhoneIcon /></span>
                                            <div style={{display: 'inline-block'}}><p>Mes contacts</p></div>
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


                <Row>
                    <Col lg={7}>
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

                    <Col lg={7}>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col lg={12}>

                                    </Col>

                                    <Col lg={12} >
                                        <Card>
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
                                            <Col lg="12">
                                                <p>Epatite</p>
                                            </Col>
                                            <Col lg="12" style={{display:'flex',justifyContent:'flex-end'}}>
                                                <Button color="primary">Ajouter</Button>
                                            </Col>
                                            </Row>
                                            </Collapse>

                                            <div style={{cursor:'pointer'}}>
                                                <p
                                                color="primary"
                                                onClick={toggle2}
                                                style={pStyle}
                                                >
                                            Antécédents chirurgicaux 
                                            <span style ={{float:'right'}} > {this.state.isOpen2 ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
                                            <hr />
                                            </div>      
                                        <Collapse isOpen={this.state.isOpen}>
                                            <Row>
                                            <Col lg="12">
                                                <p>Epatite</p>
                                            </Col>
                                            <Col lg="12" style={{display:'flex',justifyContent:'flex-end'}}>
                                                <Button color="primary">Ajouter</Button>
                                            </Col>
                                            </Row>
                                            </Collapse>

                                            <div style={{cursor:'pointer'}}>
                                                <p
                                                color="primary"
                                                onClick={toggle3}
                                                style={pStyle}
                                                >
                                            Allergies 
                                            <span style ={{float:'right'}} > {this.state.isOpen3 ? <ChevronDown color='green' size={16} /> :<ChevronRight color='green' size={16} />  }   </span></p>
                                            <hr />
                                            </div>      
                                        <Collapse isOpen={this.state.isOpen3}>
                                            <Row>
                                            <Col lg="12">
                                                <p>Mangue</p>
                                            </Col>
                                            <Col lg="12" style={{display:'flex',justifyContent:'flex-end'}}>
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
                    </Col>
                </Row>                
            </div>


        )
    }
}
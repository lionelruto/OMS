import React, { Component } from 'react'
import Switch from "react-switch";
import Select from "react-select";
import ContentHeader from '../../contentHead/contentHeader.js'
import {Row, Col, Button, Card, CardBody, CardFooter, Media} from 'reactstrap'
import userImage from '../../../assets/img/portrait/small/avatar-s-1.png';
import {MdLocationCity, MdEdit, MdDelete} from 'react-icons/md'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import Toggle from "react-toggle";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


export default class ProfessionalList extends Component{

    constructor(props) {
        super(props)
    
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
        }
    
  handleChange(checked) {
    this.setState({ checked });
  }
 
    render(){
        return(
            <div>
                <ContentHeader>
                    liste de mes profféssionnels 
                </ContentHeader>
                <Row>
                    <Col lg='7'>
                        <Row>
                            <Col lg='12' style={{display:'flex', justifyContent:'flex-end'}}>
                                <Button outline color="primary">Ajouter</Button>
                            </Col>
                        </Row>

                        {/**partie contenant la card avec les infos du professionnel */}
                        <Row>
                            <Col lg='12'>
                                <Card>
                                    <CardBody>
                                        <Row>
                                            {/**La photo, le nom et la spécialitée */}
                                            <Col lg='12'>
                                            <Media>
                                                <Media left href="#">
                                                    <img src={userImage}  alt="Generic placeholder image" />
                                                </Media>
                                                <Media body>
                                                    <Media heading>
                                                        Ernesto Dolce
                                                    </Media>
                                                        Simple chirurgien
                                                </Media>
                                            </Media>                                        
                                            </Col>

                                            {/**Les contacts */}
                                            <Col lg='12'>
                                                <div>
                                                    <span style={{display: 'inline'}}><LocationCityIcon style={{ color:" #007bff"}}/>  </span>
                                                    <div style={{display: 'inline-block'}}><p>Rue boue de lapeyrere</p></div>
                                                </div> 

                                                <div>
                                                    <span style={{display: 'inline'}}><PhoneIcon style={{ color:" #007bff"}}/>  </span>
                                                    <div style={{display: 'inline-block'}}><p>+237696360025</p></div>
                                                </div>

                                                <div>
                                                    <span style={{display: 'inline'}}><MailIcon style={{ color:" #007bff"}}/>  </span>
                                                    <div style={{display: 'inline-block'}}><p>Souleymane.Bf</p></div>
                                                </div>                                                                                  
                                            </Col>
                                        </Row>                                
                                    </CardBody>

                                    <CardFooter>
                                        <Row>
                                            
                                            {/**le switch pour rendre visible ou non le medecin en profil d'urgence */}
                                            <Col lg='6'  style={{display:'flex', justifyContent:'flex-start'}}>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    name="color"
                                                />
                                            </Col>

                                            {/**editer ou supprimer le medecin */}
                                            <Col lg='6'  style={{display:'flex', justifyContent:'flex-end'}}>
                                                <div style={{display:'flex', justifyContent:'flex-end'}}>
                                                    <span style={{display: 'inline'}}><EditIcon color=" #007bff" style={{ color:" #007bff"}}/></span>
                                                    <div style={{display: 'inline-block', marginLeft:'30px'}}><DeleteIcon color="#dc3545" style={{ color:"#dc3545"}}/> </div>
                                                </div>                                           
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>                        
                    </Col>
                </Row>
            </div>
        )
    }      

}
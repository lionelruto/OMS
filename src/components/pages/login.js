// import external modules
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
   Row,
   Col,
   Input,
   Form,
   FormGroup,
   Button,
   Label,
   Card,   
   CardBody,
   CardFooter
} from "reactstrap";
import { ClipLoader } from 'react-spinners'
import {UncontrolledAlert} from "reactstrap"
import { MAIN_VIEW_ROUTE } from '../../constants/app_utils';
import bgImage from "../../assets/img/image-login.png"

class Login extends Component {
   state = {
      rememberMe: true,
      username:"",
      password:""
   };
   handleChecked = e => {
      this.setState(prevState => ({
         rememberMe: !prevState.rememberMe,
      }));
   };

   handleInputChanged = (e)=>{
      this.setState({
         [e.target.name] : e.target.value
      });
   }

   handleLogin = e => {
      if(this.state.username.length>0 && this.state.password.length>0){
         e.preventDefault();
         this.props.loginUser(this.state.username, this.state.password, this.state.rememberMe, MAIN_VIEW_ROUTE);
      }
   }

   render() {
      return (
         <div className="container ">
            {/* gradient-purple-bliss */}
            <Row className="full-height-vh">
               <Col xs="12" className="d-flex align-items-center justify-content-center">
                  <Card className="text-center width-350 login-container">
                  {/* gradient-harmonic-energy */}
                     <CardBody>
                        <h2 className="black py-4">Login</h2>
                        {this.props.authError&&
                           <UncontrolledAlert color="danger">
                              <b>Error</b>: {this.props.authError}
                           </UncontrolledAlert>
                        }
                        <Form className="pt-2">
                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleInputChanged}
                                    required
                                 />
                              </Col>
                           </FormGroup>

                           <FormGroup>
                              <Col md="12">
                                 <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleInputChanged}
                                    required
                                 />
                              </Col>
                           </FormGroup>
                           <FormGroup>
                              <Row>
                                 <Col md="12">
                                    <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0 ml-3">
                                       <Input
                                          type="checkbox"
                                          className="custom-control-input"
                                          checked={this.state.rememberMe}
                                          onChange={this.handleChecked}
                                          id="rememberme"
                                       />
                                       <Label className="custom-control-label float-left black" for="rememberme">
                                          Remember Me
                                       </Label>
                                    </div>
                                 </Col>
                              </Row>
                           </FormGroup>
                           <FormGroup>
                              <Col md="12">
                                 <Button type="submit" disabled={this.props.isAuthenticatingUser}   style={{color:'white'}} block className=" btn-raised gradient-purple-bliss" onClick={this.handleLogin}>
                                    <div style={{display:'flex', justifyContent:"center", alignItems:"center"}}>
                                       <span style={{marginRight:5,color:'white'}}>Submit</span> 
                                       {this.props.isAuthenticatingUser&&
                                          <ClipLoader size={20} color="balck" />
                                       }
                                    </div>
                                 </Button>
                              </Col>
                           </FormGroup>
                        </Form>
                     </CardBody>
                     <CardFooter>
                        <div className="float-left">
                           <NavLink to="/pages/forgot-password" className="black">
                              Forgot Password?
                           </NavLink>
                        </div>
                     </CardFooter>
                  </Card>
               </Col>
            </Row>
         </div>
      );
   }
}

export default Login;

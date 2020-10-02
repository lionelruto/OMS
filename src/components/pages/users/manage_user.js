import React, { Fragment } from 'react';
import {
  Card,
  Col,
  CardBody,
  Label,
  Button,
  Row,
  UncontrolledAlert,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import ContentHeader from '../../contentHead/contentHeader';
import 'react-table/react-table.css';
import { X, CheckSquare, RefreshCw, Eye, EyeOff } from 'react-feather';
import { ClipLoader } from 'react-spinners';
import {
  LIST_USER_ROUTE,
  EDIT_USER_ROUTE,
  ADD_USER_ROUTE,
  APP_COLOR
} from '../../../constants/app_utils';
import { cleanObject, validateEmail } from '../../../utility/misc';
import { toastr } from 'react-redux-toastr';
import { checkData } from './helper';
import { displayMessage } from './helper';
import CreateableSelect from 'react-select';

export default class UserManagementView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    let data = props.editData ? props.editData : {};
    this.state = this.getFormData(data);
  }
  getFormData = (data) => {
    return {
      firstname: data.firstname ? data.firstname : '',
      lastname: data.lastname ? data.lastname : '',
      username: data.username ? data.username : '',
      password: data.password ? data.password : '',
      // password: window.location.href.includes(ADD_USER_ROUTE) ? '' : this.props.data ? this.props.data:'',
      cpassword: '',
      role_id: data.roleid ? data.roleid : null,
      email: data.email ? data.email : '',
      id: data.id ? data.id : null,
      type: 'password',
      ctype: 'password',
      role:data.role? data.role : '',
      sexe:data.sexe ? data.sexe : ''
    };
  };
  inputChanged = (e) => {
    console.log('field: ' + e.target.name + 'value: ' + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  setData = (data) => {
    this.setState(this.getFormData(data));
  };
  componentWillReceiveProps = (nextProps) => {
    this.setData(
      nextProps.editData && nextProps.editData.id === this.state.id
        ? this.state
        : nextProps.editData
        ? nextProps.editData
        : this.state.username
        ? this.state
        : {}
    );
    if (
      this.props.location === EDIT_USER_ROUTE &&
      nextProps.location === ADD_USER_ROUTE
    ) {
      window.scrollTo(0, 0);
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleTypeClick = () => {
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text',
    });
  };
  handlecTypeClick = () => {
    this.setState({
      ctype: this.state.ctype === 'text' ? 'password' : 'text',
    });
  };

  //   checkData = () => {
  //     let error = null;
  //     let isUpdate = this.state.id ? true : false;
  //     const regString = /[a-zA-Z]/;
  //     const CamerRegexNumber = /^((\+|00)?237)?6[5-9][0-9]{7}$/;

  //     if (this.state.firstname.trim().length === 0) {
  //       error = "USER's First Name is required!";
  //     } else if (this.state.lastname.trim().length === 0) {
  //       error = "USER's Last Name is required!";
  //     } else if (this.state.username.trim().length === 0) {
  //       error = "USER's username is required!";
  //     } else if (!isUpdate && this.state.password.trim().length === 0) {
  //       error = "USER's Password is required!";
  //     } else if (this.state.email.trim().length === 0) {
  //       error = "USER's Email is required!";
  //     } else if (!validateEmail(this.state.email)) {
  //       error = 'Email is invalid!';
  //     } else if (!isUpdate && this.state.password !== this.state.cpassword) {
  //       error = 'Confirmation Password does not match';
  //       // le name first name et tout ne doivent pas contenir de chiffres etc...
  //     } else if (!regString.test(this.state.firstname)) {
  //       error = 'FirstName cannot contain a number';
  //     } else if (!regString.test(this.state.lastname)) {
  //       error = 'LastName cannot contain a number';
  //     } else if (!regString.test(this.state.username)) {
  //       error = 'username cannot contain a number';
  //     } else if (
  //       regString.test(this.state.role_id) ||
  //       this.state.role_id === undefined
  //     ) {
  //       error = 'Provide a USERRole ';
  //     }
  //     return error;
  //   };
  //   displayMessage = (message, type, timeout = 5000) => {
  //     this.setState(
  //       {
  //         message: type != 'error' ? message : null,
  //         error: type == 'error' ? message : null,
  //       },
  //       () => {
  //         setTimeout(() => {
  //           this.setState({ message: null, error: null });
  //         }, timeout);
  //       }
  //     );
  //   };
  submitInputData = (e) => {
    e.preventDefault();
    const errors = checkData();
    if (!errors) {
      let {
        firstname,
        lastname,
        username,
        password,
        email,
        role_id,
      } = this.state;

      this.props.submitUSERData(
        cleanObject({
          firstname,
          lastname,
          username,
          password,
          email,
          role_id,
        }),

        this.state.id,
        (success, errors) => {
          if (!success) {
            let _this;
            displayMessage(errors ? errors : '', 'error');
          } else {
            const message = this.state.id
              ? 'USER was successfully Updated'
              : 'USER was successfully created';
            toastr.success(message);
            this.props.history.push(LIST_USER_ROUTE);
            console.log('This error occured: ');
          }
        }
      );
    } else {
      displayMessage(errors, 'error');
    }
  };

  clearInput = () => {
    this.setData({});
  };
  NotificationInputChanged = elt =>{
    console.log('elt:',elt)
   
    this.setState({
     [elt.name]:elt
    })
  }

  
 
  render() {
    //   console.log('prop',this.props)
    return (
      <Fragment>
        <div className="d-flex justify-content-between">
          <ContentHeader>
            {this.state.id ? 'Edit USER' : 'Create USER'}
          </ContentHeader>
        </div>
        <hr
          className={APP_COLOR}
          style={{
            height: '2px',
          }}
        />
        <Card>
          <CardBody>
            <Form className="form-horizontal">
              {(this.state.error || this.state.message) && (
                <UncontrolledAlert
                  color={this.state.error ? 'danger' : 'success'}
                >
                  {this.state.error ? this.state.error : this.state.message}
                </UncontrolledAlert>
              )}
              <div className="form-body" style={{alignContent:'center',alignItems:'center'}}>
                <Row>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="USERinput1" sm={4}>
                        First Name:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="USERinput1"
                          className="border-primary"
                          name="firstname"
                          value={this.state.firstname}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="USERinput2" sm={4}>
                        Last Name:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="USERinput2"
                          className="border-primary"
                          name="lastname"
                          value={this.state.lastname}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="USERinput3" sm={4}>
                        username:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="USERinput3"
                          className="border-primary"
                          name="username"
                          value={this.state.username}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="USERinput4" sm={4}>
                        Email:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="email"
                          id="USERinput4"
                          className="border-primary"
                          name="email"
                          value={this.state.email}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row md='12'>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="userinput3" sm={4}>
                        Sexe:
                      </Label>
                      <Col sm={8}>
                    
                           <CreateableSelect
                       
                       options={this.props.sexe}
                       name="rhesus"
                       getOptionLabel={elt => elt.label}
                       getOptionValue={elt => elt}
                       value={this.state.sexe}
                       onChange={elt => this.NotificationInputChanged(elt)}
                     />
                      </Col>
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup row>
                      <Label for="userinput3" sm={4}>
                      Role:
                      </Label>
                      <Col sm={8}>
                        <CreateableSelect
                       
                          options={this.props.role}
                          name="role"
                          getOptionLabel={elt => elt.label}
                          getOptionValue={elt => elt}
                          value={this.state.role}
                          onChange={elt => this.NotificationInputChanged(elt)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  </Row>
                {!this.state.id && (
                  <Row>
                    <Col md="6">
                      <FormGroup row>
                        <Label for="USERinput5" sm={4}>
                          Password:
                        </Label>
                        <Col sm={8}>
                          <div className="position-relative has-icon-right">
                            <Input
                              type={this.state.type}
                              // type="password"
                              id="USERinput5"
                              className="border-primary"
                              name="password"
                              value={this.state.password}
                              onChange={this.inputChanged}
                            />

                            <div
                              className="form-control-position"
                              style={{ cursor: 'pointer' }}
                            >
                              {this.state.type === 'password' ? (
                                <Eye size={16} onClick={this.handleTypeClick} />
                              ) : (
                                <EyeOff
                                  size={16}
                                  onClick={this.handleTypeClick}
                                />
                              )}{' '}
                            </div>
                          </div>
                        </Col>
                      </FormGroup>
                    </Col>
                    {/* <Col>
                      <Eye size={16} color="black" />
                    </Col> */}
                    <Col md="6">
                      <FormGroup row>
                        <Label for="USERinput6" sm={4}>
                          Confirm Password:
                        </Label>
                        <Col sm={8}>
                          <div className="position-relative has-icon-right">
                            <Input
                              type={this.state.ctype}
                              // type="password"
                              id="USERinput6"
                              className="border-primary"
                              name="cpassword"
                              value={this.state.cpassword}
                              onChange={this.inputChanged}
                            />
                            <div
                              className="form-control-position"
                              style={{ cursor: 'pointer' }}
                            >
                              {this.state.ctype === 'password' ? (
                                <Eye
                                  size={16}
                                  onClick={this.handlecTypeClick}
                                />
                              ) : (
                                <EyeOff
                                  size={16}
                                  onClick={this.handlecTypeClick}
                                />
                              )}{' '}
                            </div>
                          </div>
                        </Col>
                      </FormGroup>

                      {/* <FormGroup row>
                        <Label for="USERinput6" sm={4}>
                          Assign Role:
                        </Label>
                        <Col sm={8}>
                          <Input
                            type="select"
                            id="USERinput6"
                            className="border-primary"
                            name="role_id"
                            value={this.state.role_id}
                            onChange={this.inputChanged}
                          >
                            <option>All Roles...</option>
                            {this.props.appRoles &&
                              this.props.appRoles.map((elt) => (
                                <option value={elt.id}>{elt.name}</option>
                              ))}
                          </Input>
                        </Col>
                      </FormGroup> */}
                    </Col>
                  </Row>
                  
                )}
              </div>

              <div
                className="form-actions"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div>
                  {!this.state.id && (
                    <Button
                      color="warning"
                      className="mr-1"
                      onClick={this.clearInput}
                    >
                      <RefreshCw size={15} /> Clear
                    </Button>
                  )}
                </div>
                <div>
                  <Button
                    color="warning"
                    className="mr-1"
                    USER
                    onClick={() => this.props.history.push(LIST_USER_ROUTE)}
                  >
                    <X size={16} color="#FFF" /> Cancel
                  </Button>

                  <Button
                    className="gradient-green-tea-wil"
                    onClick={this.submitInputData}
                    // disabled={
                    //   this.props.isCreatingUSER || this.props.isUpdatingUSER
                    // }
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ marginRight: 5 }}>
                        <CheckSquare size={16} color="#FFF" />
                      </span>
                      <span style={{ marginRight: 5 }}>
                        {' '}
                        {this.state.id ? 'Update' : 'Create'}{' '}
                      </span>
                      {(this.props.isCreatingUSER ||
                        this.props.isUpdatingUSER) && (
                        <ClipLoader size={20} color="white" />
                      )}
                    </div>
                  </Button>
                </div>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

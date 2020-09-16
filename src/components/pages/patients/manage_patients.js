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
  LIST_PATIENT_ROUTE,
  EDIT_PATIENT_ROUTE,
  ADD_PATIENT_ROUTE,
  APP_COLOR
} from '../../../constants/app_utils';
import { cleanObject, validateEmail } from '../../../utility/misc';
import { toastr } from 'react-redux-toastr';
import { checkData } from './patient_helpers';
import { displayMessage } from './patient_helpers';

export default class PatientManagementView extends React.Component {
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
      Patientname: data.Patientname ? data.Patientname : '',
      password: data.password ? data.password : '',
      // password: window.location.href.includes(ADD_PATIENT_ROUTE) ? '' : this.props.data ? this.props.data:'',
      cpassword: '',
      role_id: data.roleid ? data.roleid : null,
      email: data.email ? data.email : '',
      id: data.id ? data.id : null,
      type: 'password',
      ctype: 'password',
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
        : this.state.Patientname
        ? this.state
        : {}
    );
    if (
      this.props.location === EDIT_PATIENT_ROUTE &&
      nextProps.location === ADD_PATIENT_ROUTE
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
  //       error = "Patient's First Name is required!";
  //     } else if (this.state.lastname.trim().length === 0) {
  //       error = "Patient's Last Name is required!";
  //     } else if (this.state.Patientname.trim().length === 0) {
  //       error = "Patient's Patientname is required!";
  //     } else if (!isUpdate && this.state.password.trim().length === 0) {
  //       error = "Patient's Password is required!";
  //     } else if (this.state.email.trim().length === 0) {
  //       error = "Patient's Email is required!";
  //     } else if (!validateEmail(this.state.email)) {
  //       error = 'Email is invalid!';
  //     } else if (!isUpdate && this.state.password !== this.state.cpassword) {
  //       error = 'Confirmation Password does not match';
  //       // le name first name et tout ne doivent pas contenir de chiffres etc...
  //     } else if (!regString.test(this.state.firstname)) {
  //       error = 'FirstName cannot contain a number';
  //     } else if (!regString.test(this.state.lastname)) {
  //       error = 'LastName cannot contain a number';
  //     } else if (!regString.test(this.state.Patientname)) {
  //       error = 'Patientname cannot contain a number';
  //     } else if (
  //       regString.test(this.state.role_id) ||
  //       this.state.role_id === undefined
  //     ) {
  //       error = 'Provide a PatientRole ';
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
        Patientname,
        password,
        email,
        role_id,
      } = this.state;

      this.props.submitPatientData(
        cleanObject({
          firstname,
          lastname,
          Patientname,
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
              ? 'Patient was successfully Updated'
              : 'Patient was successfully created';
            toastr.success(message);
            this.props.history.push(LIST_PATIENT_ROUTE);
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

  render() {
    //   console.log('prop',this.props)
    return (
      <Fragment>
        <div className="d-flex justify-content-between">
          <ContentHeader>
            {this.state.id ? 'Edit Patient' : 'Create Patient'}
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
              <div className="form-body">
                <Row>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="Patientinput1" sm={4}>
                        First Name:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="Patientinput1"
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
                      <Label for="Patientinput2" sm={4}>
                        Last Name:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="Patientinput2"
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
                      <Label for="Patientinput3" sm={4}>
                        Patientname:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="Patientinput3"
                          className="border-primary"
                          name="Patientname"
                          value={this.state.Patientname}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="Patientinput4" sm={4}>
                        Email:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="email"
                          id="Patientinput4"
                          className="border-primary"
                          name="email"
                          value={this.state.email}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                {!this.state.id && (
                  <Row>
                    <Col md="6">
                      <FormGroup row>
                        <Label for="Patientinput5" sm={4}>
                          Password:
                        </Label>
                        <Col sm={8}>
                          <div className="position-relative has-icon-right">
                            <Input
                              type={this.state.type}
                              // type="password"
                              id="Patientinput5"
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
                        <Label for="Patientinput6" sm={4}>
                          Confirm Password:
                        </Label>
                        <Col sm={8}>
                          <div className="position-relative has-icon-right">
                            <Input
                              type={this.state.ctype}
                              // type="password"
                              id="Patientinput6"
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

                      <FormGroup row>
                        <Label for="Patientinput6" sm={4}>
                          Assign Role:
                        </Label>
                        <Col sm={8}>
                          <Input
                            type="select"
                            id="Patientinput6"
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
                      </FormGroup>
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
                    PATIENT
                    onClick={() => this.props.history.push(LIST_PATIENT_ROUTE)}
                  >
                    <X size={16} color="#FFF" /> Cancel
                  </Button>

                  <Button
                    className={APP_COLOR}
                    onClick={this.submitInputData}
                    // disabled={
                    //   this.props.isCreatingPatient || this.props.isUpdatingPatient
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
                      {(this.props.isCreatingPatient ||
                        this.props.isUpdatingPatient) && (
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

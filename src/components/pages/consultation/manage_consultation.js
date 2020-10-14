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
  CardHeader,
} from 'reactstrap';
import ContentHeader from '../../contentHead/contentHeader';
import 'react-table/react-table.css';
import {
  X,
  CheckSquare,
  RefreshCw,
  Eye,
  EyeOff,
  Search,
  PlusCircle,
} from 'react-feather';
import { ClipLoader } from 'react-spinners';
import CreateableSelect from 'react-select';

import {
  LIST_CONSULTATION_ROUTE,
  EDIT_CONSULTATION_ROUTE,
  ADD_CONSULTATION_ROUTE,
  APP_COLOR,
  APP_COLOR2,
} from '../../../constants/app_utils';
import { cleanObject, validateEmail } from '../../../utility/misc';
import { toastr } from 'react-redux-toastr';
// import { checkData } from './patient_helpers';
// import { displayMessage } from './patient_helpers';
import QrReader from '../qr/qrReader';
import Modal from '../modal/modal';
import Firstape from './steps/analyse'

export default class PatientManagementView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    let data = props.addData ? props.addData : {};
    this.state = this.getFormData(data);
  }
  getFormData = (data) => {
    return {
      firstname: data.firstname ? data.firstname : '',
      lastname: data.lastname ? data.lastname : '',
      password: data.password ? data.password : '',
      // password: window.location.href.includes(ADD_PATIENT_ROUTE) ? '' : this.props.data ? this.props.data:'',
      cpassword: '',
      id: data.id ? data.id : null,
      type: 'password',
      ctype: 'password',
      gsanguin: data.gsanguin ? data.gsanguin : '',
      sexe: data.sexe ? data.sexe : '',
      rhesus: data.rhesus ? data.rhesus : '',
      proffession: data.profession ? data.proffession : '',
      quartier: data.quartier ? data.quartier : '',
      poids: data.poids ? data.poids : '',
      temperature: data.temperature ? data.temperature : '',
      tension: data.tension ? data.tension : '',
      img: data.img ? data.img : '',
      showQr: 'none',
      onShow: false,
      frequence: data.frequence ? data.frequence : '',
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
      nextProps.addData && nextProps.addData.id === this.state.id
        ? this.state
        : nextProps.addData
        ? nextProps.addData
        : this.state.Patientname
        ? this.state
        : {}
    );
    if (
      this.props.location === EDIT_CONSULTATION_ROUTE &&
      nextProps.location === ADD_CONSULTATION_ROUTE
    ) {
      window.scrollTo(0, 0);
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  submitInputData = (e) => {
    e.preventDefault();
    // const errors = checkData();
    // if (!errors) {
    let {
      firstname,
      lastname,
      Patientname,
      password,
      gsanguin,
      sexe,
      rhesus,
      quartier,
    } = this.state;

    this.props.submitPatientData(
      cleanObject({
        firstname,
        lastname,
        Patientname,
        password,
        gsanguin,
        sexe,
        rhesus,
        quartier,
      }),

      this.state.id,
      (success, errors) => {
        if (!success) {
          let _this;
          // displayMessage(errors ? errors : '', 'error');
        } else {
          const message = this.state.id
            ? 'Consultation was successfully Updated'
            : 'Consultation was successfully created';
          toastr.success(message);
          this.props.history.push(LIST_CONSULTATION_ROUTE);
          console.log('This error occured: ');
        }
      }
    );
    // } else {
    // displayMessage(errors, 'error');
    // }
  };
  findPatientByQr = (e) => {
    //  console.log('res',e)
    this.setState({
      onShow: !this.state.onShow,
      firstname: 'wilfried',
      lastname: 'mambou',
      Patientname: 'nothing',
      gsanguin: 'O+',
      sexe: 'M',
      rhesus: 'Positif',
      quartier: 'Etoudi',
      temperature: '35',
      tension: '12',
      img: 'https://randomuser.me/api/portraits/med/men/1.jpg',
      frequence: 85,
      poids: '90kg',
    });

    // this.props.history.push(ADD_CONSULTATION_ROUTE)
  };

  clearInput = () => {
    this.setData({});
  };
  NotificationInputChanged = (elt) => {
    console.log('elt:', elt);

    this.setState({
      [elt.name]: elt,
    });
  };
  handleModal = () => {
    this.setState({
      onShow: !this.state.onShow,
    });
  };

  render() {
    console.log('prop', this.props.location.pathname);
    return (
      <Fragment>
        <div className="d-flex justify-content-between">
          <ContentHeader>
            {this.state.id ? 'Edit Consultation' : 'Create Consultation'}
          </ContentHeader>
        </div>
        <hr
          className={APP_COLOR}
          style={{
            height: '2px',
          }}
        />
        <Card>
     
          <CardHeader
            // className="d-flex justify-content-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {(this.state.error || this.state.message) && (
              <UncontrolledAlert
                color={this.state.error ? 'danger' : 'success'}
              >
                {this.state.error ? this.state.error : this.state.message}
              </UncontrolledAlert>
            )}
            <div style={{ margin: '10', display: 'flex' }}>
              <Row md="12">
                {this.state.img && (
                  <img
                    style={{
                      height: '100px',
                      width: '100px',
                      borderRadius: '50%',
                    }}
                    src={this.state.img}
                  />
                )}
              </Row>
            </div>
          </CardHeader>
          
          <CardBody>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p style={{ textAlign: 'center', display: 'block' }}>
                {this.state.firstname}
                {''} {this.state.lastname}
              </p>
            </div>
            <Form className="form-horizontal">
              <div className="form-body">
                <Modal
                  title="Scaner Une Carte"
                  onShow={this.handleModal}
                  show={this.state.onShow}
                  submit={this.findPatientByQr}
                  datas={this.state.datas}
                />
    <Row>
                  <Col md="12">
<p>   tension:{''}{this.state.tension}</p>
                  </Col>
                  <Col md="12">
                      <p>    Frequence Cardiaque : {''}{this.state.frequence}</p>
                  </Col>
                  <Col md="12">
                      <p>  Poids: {this.state.poids}</p>
                  </Col>
                  <Col md="12">
                      
                      <p>  temperature: {''}{this.state.temperature}</p>
                  </Col>
                  <Col md="12">
                      <p>   Groupe Sanguin : {''}{this.state.gsanguin}</p>
                  </Col>
                </Row>
                <Firstape/>
                {/* </Col>
                  </Row> */}
                {/* </div> */}

                {/* {this.props.location.pathname !== ADD_CONSULTATION_ROUTE &&( 
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
               )} */}
                {/* {this.props.location.pathname !== ADD_CONSULTATION_ROUTE &&( 
                <Row>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="Patientinput3" sm={4}>
                        other contact:
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
                        Quartier:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="Patientiquat4"
                          className="border-primary"
                          name="quartier"
                          value={this.state.quartier}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
            
  )} */}

            
                <Row md="12">
                  {/* {this.props.location.pathname !== ADD_CONSULTATION_ROUTE &&( 
                  <Col md="6">
                    <FormGroup row>
                      <Label for="userinput3" sm={4}>
                        Rhesus:
                      </Label>
                      <Col sm={8}>
                        <CreateableSelect
                          options={this.props.rhesus}
                          name="rhesus"
                          getOptionLabel={(elt) => elt.label}
                          getOptionValue={(elt) => elt}
                          value={this.state.rhesus}
                          onChange={(elt) => this.NotificationInputChanged(elt)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
   )} */}
                
                </Row>
                <Row>
                  {/* {this.props.location.pathname !== ADD_CONSULTATION_ROUTE &&( 
                  <Col md="6">
                    <FormGroup row>
                      <Label for="userinput3" sm={4}>
                        Sexe :
                      </Label>
                      <Col sm={8}>
                        <CreateableSelect
                          options={this.props.sexe}
                          name="sexe"
                          getOptionLabel={(elt) => elt.label}
                          getOptionValue={(elt) => elt}
                          value={this.state.sexe}
                          onChange={(elt) => this.NotificationInputChanged(elt)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  ) } */}
                </Row>
                {/* <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    style={{ width: '25vw' }}
                    onClick={this.handleModal}
                    className={APP_COLOR}
                  >
                    {' '}
                    <Search size={16} color="#FFF" />
                    Qr Search
                  </Button>
                </div> */}
              </div>

              <div
                className="form-actions"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div>
                  {!this.state.id && (
                    <Button
                      color="warning"
                      className={APP_COLOR2}
                      onClick={this.clearInput}
                    >
                      <RefreshCw size={16} color="#FFF" /> Clear
                    </Button>
                  )}
                </div>
                <div>
                  <Button
                    color="warning"
                    className={APP_COLOR2}
                    PATIENT
                    onClick={() =>
                      this.props.history.push(LIST_CONSULTATION_ROUTE)
                    }
                  >
                    <X size={16} color="#FFF" /> Cancel
                  </Button>

                  <Button
                    className={APP_COLOR}
                    onClick={this.submitInputData}
                    color="#FFF"
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

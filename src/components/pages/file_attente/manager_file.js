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
import CreateableSelect from 'react-select';

import {
  LIST_FILE_ROUTE,
  EDIT_FILE_ROUTE,
  ADD_FILE_ROUTE,

  APP_COLOR,
  APP_COLOR2
} from '../../../constants/app_utils';
import { cleanObject, validateEmail } from '../../../utility/misc';
import { toastr } from 'react-redux-toastr';
// import { checkData } from './patient_helpers';
// import { displayMessage } from './patient_helpers';
import  QrReader from '../qr/qrReader'
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
      password: data.password ? data.password : '',
      // password: window.location.href.includes(ADD_PATIENT_ROUTE) ? '' : this.props.data ? this.props.data:'',
      cpassword: '',
      id: data.id ? data.id : null,
      type: 'password',
      ctype: 'password',
      gsanguin:data.gsanguin? data.gsanguin :'',
      sexe:data.sexe  ? data.sexe :'',
      rhesus :data.rhesus ? data.rhesus :'',
      proffession:data.profession? data.proffession :'',
      quartier : data.quartier ? data.quartier : '',
      poids:data.poids? data.poids :'',
      temperature:data.temperature ? data.temperature : '',
      tension :data.tension ? data.tension : ''
     

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
      this.props.location === EDIT_FILE_ROUTE &&
      nextProps.location === ADD_FILE_ROUTE
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
       quartier
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
          quartier
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
            this.props.history.push(LIST_FILE_ROUTE);
            console.log('This error occured: ');
          }
        }
      );
    // } else {
      // displayMessage(errors, 'error');
    // }
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
                <Row>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="Patientinput3" sm={4}>
                        Poids:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="poids"
                          className="border-primary"
                          name="poids"
                          value={this.state.poids}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="Patientinput4" sm={4}>
                        temperature:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="Patientiquat4"
                          className="border-primary"
                          name="temperature"
                          value={this.state.temperature}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <Row md='12'>
                <Col md="6">
                    <FormGroup row>
                      <Label for="Patientinput4" sm={4}>
                        tension:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="Patientiquat4"
                          className="border-primary"
                          name="tension"
                          value={this.state.tension}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup row>
                      <Label for="userinput3" sm={4}>
                      Sexe :
                      </Label>
                      <Col sm={8}>
                        <CreateableSelect
                       
                          options={this.props.sexe}
                          name="sexe"
                          getOptionLabel={elt => elt.label}
                          getOptionValue={elt => elt}
                          value={this.state.sexe}
                          onChange={elt => this.NotificationInputChanged(elt)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  </Row>
                  <Row md='12'>
                  <Col md="6">
                    <FormGroup row>
                      <Label for="userinput3" sm={4}>
                        Rhesus:
                      </Label>
                      <Col sm={8}>
                    
                           <CreateableSelect
                       
                       options={this.props.rhesus}
                       name="rhesus"
                       getOptionLabel={elt => elt.label}
                       getOptionValue={elt => elt}
                       value={this.state.rhesus}
                       onChange={elt => this.NotificationInputChanged(elt)}
                     />
                      </Col>
                    </FormGroup>
                  </Col>

                  <Col md="6">
                    <FormGroup row>
                      <Label for="userinput3" sm={4}>
                      Groupe Sanguin :
                      </Label>
                      <Col sm={8}>
                        <CreateableSelect
                       
                          options={this.props.gsanguin}
                          name="gsanguin"
                          getOptionLabel={elt => elt.label}
                          getOptionValue={elt => elt}
                          value={this.state.gsanguin}
                          onChange={elt => this.NotificationInputChanged(elt)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  </Row>

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
                      <RefreshCw size={16} color='#FFF' /> Clear
                    </Button>
                  )}
                </div>
                <div>
                  <Button
                    color="warning"
                    className={APP_COLOR2}
                    PATIENT
                    onClick={() => this.props.history.push(LIST_FILE_ROUTE)}
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
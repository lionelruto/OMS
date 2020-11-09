import React, { Fragment } from 'react';
import {
  Card,
  CardTitle,
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
import Step1 from "./Patient_stepper/Step_1.js"
import Step2 from "./Patient_stepper/Step_2.js"
import Step3 from "./Patient_stepper/Step_3.js"
import "../../../assets/scss/views/form/wizard.scss"
import {
  LIST_PATIENT_ROUTE,
  EDIT_PATIENT_ROUTE,
  ADD_PATIENT_ROUTE,
  APP_COLOR,
  APP_COLOR2
} from '../../../constants/app_utils';
import { cleanObject, validateEmail } from '../../../utility/misc';
import { toastr } from 'react-redux-toastr';
import StepZilla from "./Patient_stepper/main.js";
import { checkData } from './patient_helpers';
import { displayMessage } from './patient_helpers';
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
  NotificationInputChanged = elt =>{
    console.log('elt:',elt)
   
    this.setState({
     [elt.name]:elt
    })
  }
  render() {
    //   console.log('prop',this.props)
      const steps= [
      {name: 'Enregistrer le patient', component: <Step1 />},
      {name: 'Scanner le Qr', component: <Step2 />},
      {name: 'Vérifier les informations', component: <Step3 />},
  ]
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
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <div className="example">
                           <div className="step-progress">
                              <StepZilla
                                 steps={steps}
                                 preventEnterSubmission={true}
                                 nextTextOnFinalActionStep={"Save"}
                                 nextButtonText="Suivant"
                                 backButtonText="Precedent"
                                 hocValidationAppliedTo={[3]}
                                 startAtStep={window.sessionStorage.getItem("step") ? parseFloat(window.sessionStorage.getItem("step")) : 0}
                                 onStepChange={step => window.sessionStorage.setItem("step", step)}
                              />
                           </div>
                        </div>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
      </Fragment>
    );
  }
}

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
import IndexDMP from './DMP_steps/index';
import Consultations from './DMP_steps/Consultations.js';
import Hospitalisations from './DMP_steps/Hospitalisations.js';
import AnalysesBio from './DMP_steps/AnalysesBio.js';
import AnalysesRadio from './DMP_steps/AnalysesRadio';

export default class User_DMP extends React.Component {
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
      step: data.step ? data.step : 0,
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
  setEtape = (e) => {
    this.setState({
      step: e,
    });
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
    //console.log('prop', this.props.location.pathname);
    return (
      <Fragment>
        <div className="d-flex justify-content-between">
          <ContentHeader>
            Mon Dossier medical
          </ContentHeader>
        </div>
        <hr
          className={APP_COLOR}
          style={{
            height: '2px',
          }}
        />
        <Card>
          <CardHeader>
          </CardHeader>

          <CardBody>

            <Form className="form-horizontal">
                
              <div className="form-body">
                <Modal
                  title="Scaner Une Carte"
                  onShow={this.handleModal}
                  show={this.state.onShow}
                  submit={this.findPatientByQr}
                  datas={this.state.datas}
                />
                {/** début des étapes de la consultation */}
                {this.state.step === 0 && (
                  <IndexDMP setEtape={this.setEtape} />
                )}
                   {this.state.step === 1 && (
                  <Consultations setEtape={this.setEtape} />
                )}
                   {this.state.step === 2 && (
                  <Hospitalisations setEtape={this.setEtape} />
                )}
                   {this.state.step === 3 && (
                  <AnalysesBio setEtape={this.setEtape} />
                )}   {this.state.step === 4 && (
                  <AnalysesRadio setEtape={this.setEtape} />
                )}            
              </div>
            </Form>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

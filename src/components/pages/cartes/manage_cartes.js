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
import GenerTionQr from './generation_qr';

import {
  LIST_CARTE_ROUTE,
  EDIT_CARTE_ROUTE,
  ADD_CARTE_ROUTE,
  APP_COLOR,
} from '../../../constants/app_utils';
import { cleanObject, validateEmail } from '../../../utility/misc';
import { toastr } from 'react-redux-toastr';
var ReactDOM = require('react-dom');
var QRCode = require('qrcode-react');
export default class CarteManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    let data = props.editData ? props.editData : {};
    this.state = this.getFormData(data);
  }
  getFormData = (data) => {
    return {
      type: data.type ? data.type : '',
      serialNumber: data.serialNumber ? data.serialNumber : '',
    };
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
      this.props.location === EDIT_CARTE_ROUTE &&
      nextProps.location === ADD_CARTE_ROUTE
    ) {
      window.scrollTo(0, 0);
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  checkData = (e) => {
    let error = 'test';
    return error;
  };

  submitInputData = (e) => {
    e.preventDefault();
    const errors = this.checkData();
    if (!errors) {
      let { type, serialNumber } = this.state;

      this.props.submitPatientData(
        cleanObject({
          type,
          serialNumber,
        }),

        this.state.id,
        (success, errors) => {
          if (!success) {
            this.displayMessage(errors ? errors : '', 'error');
          } else {
            const message = this.state.id
              ? 'Carte was successfully Updated'
              : 'Carte was successfully created';
            toastr.success(message);
            this.props.history.push(LIST_CARTE_ROUTE);
            console.log('This error occured: ');
          }
        }
      );
    } else {
      this.displayMessage(errors, 'error');
    }
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

  inputChanged = (e) => {
    console.log('field: ' + e.target.name + 'value: ' + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  displayMessage = (message, type, timeout = 5000) => {
    this.setState(
      {
        message: type != 'error' ? message : null,
        error: type == 'error' ? message : null,
      },
      () => {
        setTimeout(() => {
          this.setState({ message: null, error: null });
        }, timeout);
      }
    );
  };
  render() {
    //   console.log('prop',this.props)
    return (
      <Fragment>
        <div className="d-flex justify-content-between">
          <ContentHeader>
            {this.state.id ? 'Edit Carte' : 'Create Carte'}
          </ContentHeader>
        </div>
        <hr
          className={APP_COLOR}
          style={{
            height: '2px',
          }}
        />
        <Card >
          <CardBody>
            <Form className="form-horizontal">
              {(this.state.error || this.state.message) && (
                <UncontrolledAlert
                  color={this.state.error ? 'danger' : 'success'}
                >
                  {this.state.error ? this.state.error : this.state.message}
                </UncontrolledAlert>
              )}
              {/* <div className="form-body"style={{alignContent:'center',alignItems:'center'}}>
                <Row md="12">
                  <Col md="6">
                    <FormGroup row>
                      <Label for="Patientinput3" sm={4}>
                        Serial Number:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="text"
                          id="Patientinput3"
                          className="border-primary"
                          name="Patientname"
                          value={this.state.serialNumber}
                          onChange={this.inputChanged}
                        />
                      </Col>
                    </FormGroup>
                  </Col>

                 
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                <QRCode value="http://facebook.github.io/react/" />
              </div> */}
              <GenerTionQr/>
                  {/* <Col md="6">
                    <FormGroup row>
                      <Label for="userinput3" sm={4}>
                        Type :
                      </Label>
                      <Col sm={8}>
                        <CreateableSelect
                          options={this.props.type}
                          name="type"
                          getOptionLabel={(elt) => elt.label}
                          getOptionValue={(elt) => elt}
                          value={this.state.type}
                          onChange={(elt) => this.NotificationInputChanged(elt)}
                        />
                        </Col>
                        </FormGroup>
                      </Col> */}
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
                    onClick={() => this.props.history.push(LIST_CARTE_ROUTE)}
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
                      {(this.props.isCreatingCarte ||
                        this.props.isUpdatingCarte) && (
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

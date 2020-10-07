import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Card, Col, CardBody, Input, Button, Row, Form } from 'reactstrap';
import ContentHeader from '../../contentHead/contentHeader';
import { Edit, Trash2, Trash, PlusCircle, Loader, Plus } from 'react-feather';
import NavbarSearch from '../../../components/search/Search';
import { Search } from 'react-feather';
import { withRouter } from 'react-router-dom';
import { RefreshCcw } from 'react-feather';

import {
  ADD_PATIENT_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE,
  LIST_PATIENT_ROUTE,
  ADD_CARTE_ROUTE,
  MAIN_VIEW_ROUTE,
  LIST_CARTE_ROUTE,
  APP_COLOR,
  APP_COLOR2,
} from '../../../constants/app_utils';

import Modal from '../modal/modal';
import QrReader from '../qr/qrReader';
class PatientsListe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQr: 'none',
      onShow: false,
      datas: null,
    };
  }

  handleCreateNewPatient = () => {
    this.props.history.push(ADD_PATIENT_ROUTE);
  };

  handleModal = () => {
    this.setState({
      onShow: !this.state.onShow,
    });
  };
  handleSubmitModal = (value)=>{
   let  carte =  this.props.cartes && this.props.cartes.find(e=>e.SerialNumber === value)
   let patient = this.props.datas && this.props.datas.find(e=>e.carte.SerialNumber=== value)
   let val = [patient]
   
   if(carte.SerialNumber >0){
    this.setState({
      onShow: !this.state.onShow,
      datas:val
    });
    this.props.history.push(LIST_PATIENT_ROUTE) 

   }
   else{
     console.log('Not Found')
   }
  }
  render() {
    console.log('props:', this.state.datas);
    return (
      <div>
        {/* <div className="d-flex justify-content-between">
                    <ContentHeader>Users</ContentHeader>
                    {this.props.location.pathname !== ADD_PATIENT_ROUTE &&
                        <Button size="sm" outline onClick={this.handleCreateNewPatient}>Add New User</Button>
                    }
                </div> */}
        {/* <h1 style={{ textAlign: 'center' }}>LISTE DES PATIENTSList</h1> */}

        <Row>
          <Col
            style={{
              float: 'right',
              display: 'block',
            }}
            md={12}
          >
            <div className="d-flex justify-content-between">
              <ContentHeader>Patient</ContentHeader>
              {this.props.location.pathname !== ADD_PATIENT_ROUTE && (
                <Button
                  className={APP_COLOR}
                  style={{
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    float: 'right',
                    display: 'block',
                    // border :'3px solid #fff'
                  }}
                  onClick={this.handleCreateNewPatient}
                >
                  <Plus size={24} color="#fff"></Plus>
                </Button>
              )}
            </div>
            <hr
              className={APP_COLOR}
              style={{
                height: '2px',
              }}
            />
          </Col>

          <Col md={12}>
            <Card>
              <div className="ml-1">
                <a
                // onClick={() => this.handleRefreshTable()}
                // disabled={this.props.isFetchingUsers}
                >
                  <RefreshCcw
                    size={16}
                    color="#E64A19"
                    className={`${
                      this.props.isFetchingUsers ? 'animate-spin' : ''
                    }`}
                  />
                </a>
              </div>

              <div    style={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button className={APP_COLOR} onClick={this.handleModal}>
                  Qr Search
                </Button>
                </div>

                  <div>
                <Col
                  md={4}
                  style={{
                    marginTop: '1rem',
                    float: 'right',
                  }}
                >
                  {/* <Form className="navbar-form mt-1 float-left" role="search"> */}
                  <div
                    className="position-relative has-icon-right"
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                  >
                    <Input
                      id="search-term"
                      type="text"
                      className="form-control round"
                      placeholder="Try quick search"
                      //    onChange={this.handleChange}
                      //    value={searchTerm}
                    />
                    {/* <div className="form-control-position">
               <Search size={16} className="mb-0" />
            </div> */}
                  </div>

                  {/* </Form> */}
                </Col>
              </div>

              {/* <CardBody>
                <ReactTable
                  data={this.props.datas}
                  columns={this.props.columns}
                  defaultPageSize={
                    this.props.defaultPageSize ? this.props.defaultPageSize : 5
                  }
                  className="-striped -highlight"
                />
              </CardBody> */}

              <CardBody>
                {
                  this.state.datas &&  (
                      <ReactTable
                  data={this.state.datas}
                  columns={this.props.columns}
                  defaultPageSize={
                    this.props.defaultPageSize ? this.props.defaultPageSize : 5
                  }
                  className="-striped -highlight"
                />
                )
                }
              
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal
          title="Scaner Une Carte"
          onShow={this.handleModal}
          show={this.state.onShow}
          submit ={this.handleSubmitModal}
          datas={this.state.datas}

        />
      </div>
    );
  }
}

export default withRouter(PatientsListe);

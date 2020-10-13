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
  ADD_CONSULTATION_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE,
  LIST_FILE_ROUTE,
  ADD_CARTE_ROUTE,
  MAIN_VIEW_ROUTE,
  LIST_CARTE_ROUTE,
  APP_COLOR,
  APP_COLOR2,
} from '../../../constants/app_utils';

import Modal from '../modal/modal';
import QrReader from '../qr/qrReader';
class FilesListe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQr: 'none',
      onShow: false,
      datas: this.props.datas?this.props.datas :[],
    };
  }

  handleCreateNewPatientTofile = () => {
    this.props.history.push(ADD_CONSULTATION_ROUTE);
  };

  handleModal = () => {
    this.setState({
      onShow: !this.state.onShow,
    });
  };

  render() {
    console.log('props:', this.props);
    return (
      <div>
            {/* <ContentHeader>File D'Attente</ContentHeader> */}
        {/* <div className="d-flex justify-content-between">
                
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
              <ContentHeader>Consultations List</ContentHeader>
              {this.props.location.pathname !== ADD_CONSULTATION_ROUTE && (
                <Button
                  className={APP_COLOR}
                  style={{
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    float: 'right',
                    display: 'block',
                    // border :'3px solid #fff'
                  }}
                  onClick={this.handleCreateNewPatientTofile}
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

   
      </div>
    );
  }
}

export default withRouter(FilesListe);

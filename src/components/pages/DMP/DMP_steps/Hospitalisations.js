import React, { Component } from 'react';
import ReactTable from 'react-table';
import { PDFReader } from 'reactjs-pdf-reader';
import { Card, Col, CardBody, Input, Button, Row, Form } from 'reactstrap';
import ContentHeader from '../../../contentHead/contentHeader.js';
import { Edit, Trash2, Trash, PlusCircle, Loader, Plus } from 'react-feather';
import { Search } from 'react-feather';
import { withRouter } from 'react-router-dom';
import { RefreshCcw } from 'react-feather';

import {
  ADD_FILE_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE,
  LIST_FILE_ROUTE,
  ADD_CARTE_ROUTE,
  MAIN_VIEW_ROUTE,
  LIST_CARTE_ROUTE,
  APP_COLOR,
  APP_COLOR2,
} from '../../../../constants/app_utils.js';

import Modal from '../../modal/modal';
import QrReader from '../../qr/qrReader';
class Hospitalisations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showQr: 'none',
      onShow: false,
      datas: this.props.datasHospitalisation?this.props.datasHospitalisation :[],
    };
  }

  handleCreateNewPatientTofile = () => {
    this.props.history.push(ADD_FILE_ROUTE);
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
        <Row>
          <Col
            style={{
              float: 'right',
              display: 'block',
            }}
            md={12}
          >
            <div className="d-flex justify-content-between">
              <ContentHeader>Liste de mes Hospitalisations</ContentHeader>
            </div>
          </Col>

          <Col md={12}>
            <Card>
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
                  </div>
                </Col>
              </div>
              <CardBody>
                  <Row>
                      <Col lg={8} md={8}>     
                      {this.props.datas && (
                      <ReactTable
                        data={this.state.datas}
                        columns={this.props.columns}
                        defaultPageSize={
                          this.props.defaultPageSize
                            ? this.props.defaultPageSize
                            : 5
                        }
                        className="-striped -highlight"
                      />
                    )}               
                      </Col>

                      <Col lg={4} md={4} >

                        <p>Visualiser mon document</p>
                        {/* <PDFReader url={"https://arxiv.org/pdf/quant-ph/0410100.pdf"}
                        scale={0.45}
                        /> */}
                        <Button color="success" style={{width:'100%'}}>Telecharger le PDF</Button>
                      </Col>
                  </Row>

              
              </CardBody>
            </Card>
          </Col>
        </Row>

   
      </div>
    );
  }
}

export default withRouter(Hospitalisations);

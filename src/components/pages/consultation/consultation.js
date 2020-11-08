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
              <ContentHeader>Fille d'attente</ContentHeader>
         
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

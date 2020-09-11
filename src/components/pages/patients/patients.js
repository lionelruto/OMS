import React, { Component } from 'react';
import ReactTable from 'react-table';
import { Card, Col, CardBody, Input, Button, Row, Form } from 'reactstrap';
import ContentHeader from '../../contentHead/contentHeader';
import { Edit, Trash2, Trash, PlusCircle, Loader, Plus } from 'react-feather';
import NavbarSearch from '../../../components/search/Search';
import { Search } from 'react-feather';

import {
  ADD_PATIENT_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE,
  LIST_PATIENT_ROUTE,
  ADD_CARTE_ROUTE,
  MAIN_VIEW_ROUTE,
  LIST_CARTE_ROUTE,
} from '../../../constants/app_utils';

class Patients extends Component {
  handleCreateNewPatient = () => {
    this.props.history.push(ADD_PATIENT_ROUTE);
  };
  render() {
    return (
      <div>
        {/* <div className="d-flex justify-content-between">
                    <ContentHeader>Users</ContentHeader>
                    {this.props.location.pathname !== ADD_PATIENT_ROUTE &&
                        <Button size="sm" outline onClick={this.handleCreateNewPatient}>Add New User</Button>
                    }
                </div> */}
        <h1 style={{ textAlign: 'center' }}>LISTE DES PATIENTS</h1>
        <hr
          className="gradient-purple-bliss"
          style={{
            height: '2px',
          }}
        />

        <Row>
          <Col
            style={{
              float: 'right',
              display: 'block',
            }}
            md={12}
          >
            <Button
              className="gradient-purple-bliss"
              style={{
                borderRadius: '50%',
                backgroundColor: 'green',
                float: 'right',
                display: 'block',
                // border :'3px solid #fff'
              }}
            >
              <Plus size={24} color="#fff">
                Add
              </Plus>
            </Button>
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
                    {/* <div className="form-control-position">
               <Search size={16} className="mb-0" />
            </div> */}
                  </div>

                  {/* </Form> */}
                </Col>
              </div>

              <CardBody>
                <ReactTable
                  data={this.props.datas}
                  columns={this.props.columns}
                  defaultPageSize={
                    this.props.defaultPageSize ? this.props.defaultPageSize : 5
                  }
                  className="-striped -highlight"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Patients;

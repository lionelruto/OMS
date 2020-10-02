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
  ADD_USER_ROUTE,
  LOGIN_VIEW_ROUTE,
  MAIN_INFIRMIERE_ROUTE,
  LIST_USER_ROUTE,
  ADD_CARTE_ROUTE,
  MAIN_VIEW_ROUTE,
  LIST_CARTE_ROUTE,
  APP_COLOR,
} from '../../../constants/app_utils';

class Users extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      SelectedUser:this.props.datas
    }
  }
  componentWillReceiveProps(nextProps){
this.setState({
  SelectedUser :
  this.state.SelectedUser.length > 0 
  ? this.state.SelectedUser 
  :nextProps.datas
})
  }
  
  handleCreateNewUser = () => {
    this.props.history.push(ADD_USER_ROUTE);
  };
  filterBy = e => {
       
    const updatedList = this.props.datas.filter( user => user.phone.toString().includes( e.target.value) || user.fullName.toUpperCase().trim().includes( e.target.value.trim().toUpperCase())  );
      console.log(this.props.datas)
      if(e.target.value !== '') {
        this.setState({ SelectedUser: updatedList});
      } else {

        this.setState({ SelectedUser: this.props.datas});
      }
    };
    
  render() {
    console.log('props:', this.props);
    return (
      <div>
        {/* <div className="d-flex justify-content-between">
                    <ContentHeader>Users</ContentHeader>
                    {this.props.location.pathname !== ADD_USER_ROUTE &&
                        <Button size="sm" outline onClick={this.handleCreateNewUSER}>Add New User</Button>
                    }
                </div> */}
        {/* <h1 style={{ textAlign: 'center' }}>LISTE DES USERS</h1> */}

        <Row>
          <Col
            style={{
              float: 'right',
              display: 'block',
            }}
            md={12}
          >
            <div className="d-flex justify-content-between">
              <ContentHeader>USER</ContentHeader>
              {this.props.location.pathname !== ADD_USER_ROUTE && (
                <Button
                  className={APP_COLOR}
                  style={{
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    float: 'right',
                    display: 'block',
                    // border :'3px solid #fff'
                  }}
                  onClick={this.handleCreateNewUser}
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
                         onChange={this.filterBy}
                        //  value={searchTerm}
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
                  data={this.state.SelectedUser}
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

export default withRouter(Users);

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartesView from '../../components/pages/cartes'
import { components } from 'react-select'
import { Edit, Trash2, Trash, PlusCircle, Loader } from "react-feather";
import {
    // ADD_CARTE_ROUTE,
    LOGIN_VIEW_ROUTE,
    MAIN_INFIRMIERE_ROUTE,
    LIST_CARTE_ROUTE,
    ADD_CARTE_ROUTE,
    MAIN_VIEW_ROUTE,
    // LIST_CARTE_ROUTE,
    EDIT_CARTE_ROUTE
  } from '../../constants/app_utils';
  

function CellItem(props) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: props.deleted ? "#ef9a9a" : ""
        }}
      >
        {props.item || typeof props.item === "number"
          ? props.item
          : props.children}
      </div>
    );
  }
export class ManageCartes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
                userIdEdit:null,
                userDataEdit:null
          
        
        }
    }
  
    setEditUser = (userId, userData)=>{
        this.setState({
            userDataEdit: userData,
            userIdEdit: userId
        }, ()=>{
            this.props.history.push(EDIT_CARTE_ROUTE)
            setTimeout(() => {
                window.scrollTo(0,0);
            }, 25);
        });
    }

    render() {
        // console.log('testrr',this.props)
        return (
            <div>
              <CartesView 
              datas={this.props.datas}
              type ={[{id:1,name:'type',label:"Golden"}, {id:2,name:'type',label:'Classic-'}]}
                columns={[
                 
                    {
                      Header: "Type",
                      accessor: "fullName",
                      Cell: props => (
                        <CellItem
                          deleted={
                            this.props.isDeletedPickupArea &&
                            this.props.deletingPickupAreaId == props.original.id
                          }
                          item={props.value}
                        />
                      )
                    },
                    {
                      Header: "Serial Number",
                      accessor: "SerialNumber",
                      Cell: props => (
                        <CellItem
                          deleted={
                            this.props.isDeletedPickupArea &&
                            this.props.deletingPickupAreaId == props.original.id
                          }
                          item={props.value}
                        />
                      )
                    },                  
                    {
                      Header: "Actions",
                      Cell: props => (
                        <span>
                          <Edit
                            size={18}
                            className="mr-2 hand-cursor"
                            color="#1565C0"
                            onClick={()=>this.setEditUser(props.original.id, props.original)}
                          />
                          {(this.props.isDeletingPickupArea ||
                            this.props.isDeletedPickupArea) &&
                          this.props.deletingPickupAreaId == props.original.id ? (
                            <Loader
                              size={18}
                              className="hand-cursor animate-spin"
                              color="#FF586B"
                            />
                          ) : (
                            <Trash2
                              size={18}
                              className="hand-cursor"
                              color="#FF586B"
                            //   onClick={() => this.deletePickupArea(props.original.id)}
                            />
                          )}
                        </span>
                      ),
                      width: 100,
                      filterable: false,
                      sortable: false
                    }
                  ]}
              />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('etat',state)
    return{
        datas:state.carte.Carte
    }

}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(ManageCartes)

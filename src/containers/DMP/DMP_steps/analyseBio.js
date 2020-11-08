import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AnalyseBio from '../../../components/pages/DMP/DMP_steps/AnalysesBio'
import { components } from 'react-select'
import { Edit, Trash2, Trash, PlusCircle, Loader } from "react-feather";
// import {
//     // ADD_CARTE_ROUTE,
//     LOGIN_VIEW_ROUTE,
//     MAIN_INFIRMIERE_ROUTE,
//     LIST_CARTE_ROUTE,
//     ADD_CARTE_ROUTE,
//     MAIN_VIEW_ROUTE,
//     // LIST_CARTE_ROUTE,
//     EDIT_CARTE_ROUTE
//   } from '../../constants/app_utils';
  

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
export class ManageAnalyseBio extends Component {
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
            // this.props.history.push(EDIT_CARTE_ROUTE)
            setTimeout(() => {
                window.scrollTo(0,0);
            }, 25);
        });
    }

    render() {
        console.log('testrr',this.props)
        return (
            <div>
              <AnalyseBio 
              datas={this.props.datas}
                columns={[
                 
                    {
                      Header: "Consultation",
                      accessor: "consultation",
                      Cell: props => (
                        <CellItem
                        //   deleted={
                        //     this.props.isDeletedPickupArea &&
                        //     this.props.deletingPickupAreaId == props.original.id
                        //   }
                          item={props.value}
                        />
                      )
                    },
                    {
                      Header: "Medecin",
                      accessor: "Medecin",
                      Cell: props => (
                        <CellItem
                        //   deleted={
                        //     this.props.isDeletedPickupArea &&
                        //     this.props.deletingPickupAreaId == props.original.id
                        //   }
                          item={props.value}
                        />
                      )
                    }, 
                    {
                        Header: "Date",
                        accessor: "Date",
                        Cell: props => (
                          <CellItem
                          //   deleted={
                          //     this.props.isDeletedPickupArea &&
                          //     this.props.deletingPickupAreaId == props.original.id
                          //   }
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
    console.log('state:',state)
    return{
        datas:state.DMP_Bio.AnalyseBio
    }

}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(ManageAnalyseBio)

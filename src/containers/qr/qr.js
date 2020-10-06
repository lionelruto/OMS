import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Qr from '../../components/pages/qr/generation_qr'

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
export class ManageQrs extends Component {

    render() {
     
        return    <Qr datas={this.props.datas}  />
      
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

export default connect(mapStateToProps)(ManageQrs)

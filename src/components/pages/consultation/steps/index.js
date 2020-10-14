import React, { Component, Fragment } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import Spinner from '../../../spinner/spinner';
import * as Icon from 'react-feather';
import Statistics from '../../statistiques/consultation_box';
// import * as fetchAll from '../../actions/statitiques/clients_taxi_drivers_count';
import { bindActionCreators } from 'redux';
import 'chartist/dist/chartist.min.css';
import '../../../../assets/scss/components/cards/visitSalesStatistics.scss';
import { connect } from 'react-redux'
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

import {FaMicroscope} from 'react-icons/fa'
import {FaXRay} from 'react-icons/fa'
import {FaStethoscope} from 'react-icons/fa'
import {FaProcedures} from 'react-icons/fa'
// import DateRange from "@material-ui/icons/DateRange";
import {FaMale} from 'react-icons/fa'
import {FaTemperatureLow} from 'react-icons/fa'
import {FaWeight} from 'react-icons/fa'
import {FaHeartbeat} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import {FaNotesMedical} from 'react-icons/fa'
import DateRange from "@material-ui/icons/DateRange";

import {

    DASHBOARD,
    ADD_CONSULTATION_ROUTE,
    DELETE_CONSULTATION_ROUTE,
    EDIT_CONSULTATION_ROUTE,
    HYPOTHSE_CONSULTATION_ROUTE,
    ENQUETE_CONSULTATION_ROUTE,
    ANALYSE_CONSULTATION_ROUTE,
    EXAMEN_PHYSIQUE_CONSULTATION_ROUTE
  } from '../../../../constants/app_utils';





// import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

export class index extends Component {
    componentDidMount() {
        this.refreshDashboard();
      }
      refreshDashboard = () => {
        // this.props.fetch_stats(this.props.token);
      };

      handleAnalyseClick = ()=>{
        this.props.history.push(ANALYSE_CONSULTATION_ROUTE);
      }
      handlePhysiqExamsClick = ()=>{
        this.props.history.push(EXAMEN_PHYSIQUE_CONSULTATION_ROUTE);
    }
    
    handleHypothseClick = ()=>{
        this.props.history.push(HYPOTHSE_CONSULTATION_ROUTE);
    }
    
    handleEnqueteClick = ()=>{
        this.props.history.push(ENQUETE_CONSULTATION_ROUTE);
    }
    
  

    
    render() {
        return (
            <div>

           <Row className="row-eq-height">
            <Col sm="12" md="6" xl="3" style={{cursor:'pointer'}} onClick={this.handleAnalyseClick}>
              <Statistics
                chartData={'good'}
                cardBgColor="gradient-green-teal"
                statistics={
                    75
                }
                text="Analyse"
                iconSide="right"
              >
 
                <FaNotesMedical style={{fontSize:36,color:"#fff"  }} />
                {/* <Icon.Users size={36} strokeWidth="1.3" color="#fff" /> */}
              </Statistics>
            </Col>
            <Col sm="12" md="6" xl="3" style={{cursor:'pointer'}} onClick={this.handleEnqueteClick}>
              <Statistics
                chartData={'good'}
                cardBgColor="gradient-green-teal"
                statistics={ 
                45}
                text="Enquete System"
                iconSide="right"
              >
                <FaXRay size={36} strokeWidth="1.3" color="#fff" />
              </Statistics>
            </Col>
            <Col sm="12" md="6" xl="3" style={{cursor:'pointer'}} onClick={this.handleHypothseClick}>
              <Statistics
                chartData={'good'}
                cardBgColor="gradient-green-teal"
                statistics={
                  40
                }
                text="Hypothese Diagnostique"
                iconSide="right"
              >
                <FaStethoscope size={36} strokeWidth="1.3" color="#fff" />
              </Statistics>
            </Col>

            <Col sm="12" md="6" xl="3" style={{cursor:'pointer'}} onClick={this.handlePhysiqExamsClick}>
              <Statistics
                chartData={'good'}
                cardBgColor="gradient-green-teal"
                statistics={
                  100
                }
                text="  Examens Physique"
                iconSide="right"
              >
                <FaHeartbeat style={{fontSize:36,color:"#fff"  }} />
                {/* LocalTaxiIcon */}
                {/* <Icon.PieChart size={36} strokeWidth="1.3" color="#fff" />/ */}
                {/* <FontAwesomeIcon icon='telegram' color="#fff"/> */}
              </Statistics>
            </Col>
        </Row>
        
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.userToken,
    userId: state.auth.userId,
   
})

function mapDispatchToProps (dispatch) {
    return bindActionCreators(
        {
        //   ...fetchAll,
        },
        dispatch
      );
}

export default connect(mapStateToProps, mapDispatchToProps)(index)

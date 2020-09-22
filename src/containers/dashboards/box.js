import React, { Component, Fragment } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import Spinner from '../../components/spinner/spinner';
import * as Icon from 'react-feather';
import Statistics from '../../components/pages/statistiques/box_statistiques';
// import * as fetchAll from '../../actions/statitiques/clients_taxi_drivers_count';
import { bindActionCreators } from 'redux';
import 'chartist/dist/chartist.min.css';
import '../../assets/scss/components/cards/visitSalesStatistics.scss';
import { connect } from 'react-redux'
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

import {FaMicroscope} from 'react-icons/fa'
import {FaXRay} from 'react-icons/fa'
import {FaStethoscope} from 'react-icons/fa'
import {FaProcedures} from 'react-icons/fa'
import DateRange from "@material-ui/icons/DateRange";




// import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

export class index extends Component {
    componentDidMount() {
        this.refreshDashboard();
      }
      refreshDashboard = () => {
        // this.props.fetch_stats(this.props.token);
      };
    
    render() {
        return (
            <div>

           <Row className="row-eq-height">
            <Col sm="12" md="6" xl="3">
              <Statistics
                chartData={'good'}
                cardBgColor="gradient-green-teal"
                statistics={
                    75
                }
                text="Total Hospitalisations"
                iconSide="right"
              >
 
                <FaProcedures style={{fontSize:36,color:"#fff"  }} />
                {/* <Icon.Users size={36} strokeWidth="1.3" color="#fff" /> */}
              </Statistics>
            </Col>
            <Col sm="12" md="6" xl="3">
              <Statistics
                chartData={'good'}
                cardBgColor="gradient-ibiza-sunset"
                statistics={ 
                45}
                text="Total Examens Radiologique"
                iconSide="right"
              >
                <FaXRay size={36} strokeWidth="1.3" color="#fff" />
              </Statistics>
            </Col>
            <Col sm="12" md="6" xl="3">
              <Statistics
                chartData={'good'}
                cardBgColor="gradient-ibiza-sunset"
                statistics={
                  40
                }
                text="Consultations"
                iconSide="right"
              >
                <FaStethoscope size={36} strokeWidth="1.3" color="#fff" />
              </Statistics>
            </Col>

            <Col sm="12" md="6" xl="3">
              <Statistics
                chartData={'good'}
                cardBgColor="gradient-blackberry"
                statistics={
                  100
                }
                text="Total  Examens Biologique"
                iconSide="right"
              >
                <FaMicroscope style={{fontSize:36,color:"#fff"  }} />
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

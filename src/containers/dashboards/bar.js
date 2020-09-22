import React, { Component, Fragment } from 'react';
import { Row, Col, Button, FormGroup, Label ,UncontrolledAlert} from 'reactstrap';

import HobbiesStatisticsBarChartCard from '../../components/pages/statistiques/bar';
import { toastr } from 'react-redux-toastr';

// import * as fetchDriverByTown from '../../actions/statitiques/fetch_chart_drivers_town';
import Spinner from '../../components/spinner/spinner';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'chartist/dist/chartist.min.css';
import '../../assets/scss/components/cards/visitSalesStatistics.scss';
var moment = require('moment-timezone');
// import DatePicker from 'reactstrap-date-picker';

let PatientStatisticsBarChartData = {
  labels: ['Centre','Litoral','Ouest','Sud','Sud-Ouest','Nord','Nord-Ouest'],
  series: [[300,200,150,100,135,200,250]],
};

export class index extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       start_date:moment(new Date().toISOString())
//       .subtract(1, 'y')
//       .format('YYYY-MM-DD'),
//     end_date:moment(new Date().toISOString()).format('YYYY-MM-DD'),
//       DriverByTownDatas: null,
//     };
//   }

//   componentWillReceiveProps = (nextProps) => {
//     this.setState({
//       start_date: nextProps.start_date === this.state.start_date ? this.state.start_date : nextProps.start_date,
//       end_date: nextProps.end_date === this.state.end_date ? this.state.end_date : nextProps.end_date
//     })
//     if( nextProps.start_date !== this.state.start_date  ||  nextProps.end_date !== this.state.end_date){
//       this.refreshDashboard(nextProps.start_date,nextProps.end_date)
    
//     }
     
//   };
  // handleStartDateChange = (e, formatedDate) => {
  //   // console.log('test:',e,formatedDate)
  //   {
  //     /* moment.tz(props.value, "Africa/Douala").format("DD/MM/YY hh:mm") */
  //   }
  //   this.setState({
  //     start_date: formatedDate,
  //   });
  // };
  // handleDateChange = (e, formatedDate) => {
  //   // console.log('test:',e)
  //   {
  //     /* moment.tz(props.value, "Africa/Douala").format("DD/MM/YY hh:mm") */
  //   }
  //   this.setState({
  //     end_date: formatedDate,
  //   });
  // };
//   componentDidMount() {
    // this.refreshDashboard(this.state.start_date,this.state.end_date);
//   }
//   refreshDashboard = (start,end) => {
    // if (!this.props. isLoadedClient && !this.props.isLoadedDriver && !this.props.isLoadedTaxi) {
    // this.props.fetchAppCountries(this.props.token);
    // this.submitInputDriverData(start,end);

    //     // this.props.fetch_Drivers_users_taxis(this.props.token);
//   };
//   displayMessage = (message, type, timeout = 5000) => {
//     this.setState(
//       {
//         message: type != 'error' ? message : null,
//         error: type == 'error' ? message : null,
//       },
//       () => {
//         setTimeout(() => {
//           this.setState({ message: null, error: null });
//         }, timeout);
//       }
//     );
//   };
//   submitInputDriverData = (start,end ) => {
//     this.setState({
//       DriverByTownDatas: null,
//     });
//     DriverHobbiesStatisticsBarChartData = {
//       labels: [],
//       series: [[]],
//     };
//     this.props.fetchDriverByTown(
//      start,
//      end,
//       this.props.token,
//       (success, errors) => {
//         if (!success) {
//           this.displayMessage(errors ? errors : 'Operation Failed', 'error');
//         } else {
//           this.props.DriversByTownData.map((e) => {
//             DriverHobbiesStatisticsBarChartData.labels.push(
//               e.townName.en + ' => ' + e.count
//             );
//             DriverHobbiesStatisticsBarChartData.series[0].push(e.count);
//           });
//           this.setState({
//             DriverByTownDatas: DriverHobbiesStatisticsBarChartData,
//           });
//           const message = 'suscess';
//           toastr.success(message);
//           // this.props.history.push(LIST_TAXI_DRIVER);
//         }
//       }
//     );
//   };
  render() {
// console.log(this.props.end_date,this.props.start_date)
    return (
      <div>
         
              <HobbiesStatisticsBarChartCard
                hobbiesStatisticsBarChartData={PatientStatisticsBarChartData}
                cardTitle="Statistics"
                cardSubTitle=" Patients Par Province"
              />   
   
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.userToken,
  userId: state.auth.userId,
  
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    //   ...fetchDriverByTown,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(index);

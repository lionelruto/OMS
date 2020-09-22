import React, { PureComponent } from "react";
import { Card, CardBody, Media } from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";
// import "../../../assets/scss/components/cards/minimalStatisticsCardWithChart.scss";
import ChartistGraph from "react-chartist";
import ChartistLib from "chartist";
import CountUp from 'react-countup';
class DriverStatistics extends PureComponent {
  render() {
    let iconLeft;
    let iconRight;
    let textDirection;

    if (this.props.iconSide === "right") {
      iconRight = this.props.children;
    } else {
      iconLeft = this.props.children;
      textDirection = "text-right";
    }
    return (
      <Card className={classnames(this.props.cardBgColor)}>
        <CardBody className="pt-2 pb-0">
          <Media>
            {iconLeft}
            <Media body className={textDirection}>
              <h3 className={classnames("mb-1", this.props.statisticsColor)}>
               <span
                style={{
                  color:'#fff',
                  fontSize:'md',
                  fontWeight:'bold',
                  // fontSize:22,
                  
              }}> {<CountUp start={0} end={this.props.statistics} delay={0}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>}</span>
              </h3>
              <span  style={{color:'#fff',fontSize:20}}>{this.props.text}</span>
            </Media>
            {iconRight}
          </Media>
        </CardBody>
        <ChartistGraph
               className="WidgetlineChart WidgetlineChartshadow mb-2"
               
               type="Line"
               options={{
                  height: "75px",
                  axisX: {
                     showGrid: true,
                     showLabel: false,
                     offset: 0
                  },
                  axisY: {
                     showGrid: false,
                     low: 40,
                     showLabel: false,
                     offset: 0
                  },
                  lineSmooth: ChartistLib.Interpolation.cardinal({
                     tension: 0
                  }),
                  fullWidth: true
               }}
            />
         </Card>
      
    );
  }
}

DriverStatistics.propTypes = {
  iconSide: PropTypes.string,
  statisticsColor: PropTypes.string,
  statistics: PropTypes.number,
  text: PropTypes.string
};

export default DriverStatistics;

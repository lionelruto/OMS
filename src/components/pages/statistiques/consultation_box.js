import React, { PureComponent } from "react";
import { Card, CardBody, Media } from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";
// import "../../../assets/scss/components/cards/minimalStatisticsCardWithChart.scss";



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
        <CardBody className="pt-2 pb-0" style={{marginBottom:'0.8rem'}}>
          <Media>
            {iconLeft}
            <Media body className={textDirection}>
              <h3 className={classnames("mb-1", this.props.statisticsColor)}>
               
              </h3>
              <span  style={{color:'#fff',fontSize:20}}>{this.props.text}</span>
            </Media>
            {iconRight}
          </Media>
        </CardBody>
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

// import external modules
import React, { Fragment } from "react";
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import ChartistGraph from "react-chartist";
import ChartistLib from "chartist";
import "chartist/dist/chartist.min.css";

// import internal(own) modules
import { ChartistData } from "./chartistData";
import "../../../../assets/scss/views/charts/chartist.scss";

export default class WeigthStats extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
    let data = props.addData ? props.addData : {};
    
  }
    render(){
        return(
            <div>
                <Card>
                    <CardBody>
                        <Row>
                            <Col lg={4}>
                                <Row>
                                    <Col lg={12}>
                                        Moyenne
                                    </Col>
                                    <Col lg={12}>
                                        70
                                    </Col>
                                </Row>
                                <hr style={{ width:'0px', height:'100%'}}/>
                            </Col>


                            <Col lg={4}>
                                <Row>
                                    <Col lg={12}>
                                        Min
                                    </Col>
                                    <Col lg={12}>
                                        68
                                    </Col>
                                </Row>
                                <hr style={{ width:'0px', height:'100%'}}/>
                            </Col>


                            <Col lg={4}>
                                <Row>
                                    <Col lg={12}>
                                        Max
                                    </Col>
                                    <Col lg={12}>
                                        80
                                    </Col>
                                    <hr style={{ width:'0px', height:'100%'}}/>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <Card>
                <CardHeader>
                    <CardTitle>Statistiques</CardTitle>
                </CardHeader>
                <CardBody>
                    <ChartistGraph
                        data={ChartistData.LineArea4Data}
                        type="Line"
                        options={{
                            // low: 650,
                            height: "400px",
                            low: 0,
                            showArea: true,
                            fullWidth: true
                        }}
                    />
                </CardBody>
                </Card>
            </div>

        )
    }
}
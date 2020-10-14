import React, { Component } from 'react';
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Input,
  FormText,
  Row,
  Col,
  CardHeader,

} from 'reactstrap';
import {
  Home,
  Mail,
  MessageSquare,
  ChevronRight,
  Aperture,
  Box,
  Edit,
  Grid,
  Layers,
  Sliders,
  Map,
  BarChart2,
  Calendar,
  Copy,
  Book,
  CheckSquare,
  LifeBuoy,
  Users,
  ChevronDown,
} from 'react-feather';
const pStyle = {
  color: 'black',
  margin: '0.5rem',
  cursor: 'pointer',
  Padding: '0.5rem',
};
export default class Enquete_systeme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Card>
          <CardHeader style={{ textAlign: 'center' }}>
          Résumé et Hypohèse diagnostique{' '}
          </CardHeader>
          <CardBody>
            <p color="primary" onClick={this.toggle} style={pStyle}>
            Résumé syndromique
              <span style={{ float: 'right' }}>
                {' '}
                {this.state.isOpen ? (
                  <ChevronDown color="green" size={16} />
                ) : (
                  <ChevronRight color="green" size={16} />
                )}{' '}
              </span>
            </p>
            <hr />
            <Collapse isOpen={this.state.isOpen}>
              <Row>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText> Résumé syndromique  :</FormText>{' '}
                    <Input
                    type="textarea" 
                    rows={12}
                      placeholder="Observation"
                      name="paleur"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>Hypothèse diagnostique</FormText>{' '}
                    <Input
                    type="textarea" 
                    rows={12}
                      placeholder="Observation"
                      name="ictere"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
              </Row>
           
            </Collapse>
          </CardBody>
        </Card>
      </div>
    );
  }
}

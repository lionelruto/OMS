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
            Enquete Systeme{' '}
          </CardHeader>
          <CardBody>
            <p color="primary" onClick={this.toggle} style={pStyle}>
              Obeservations Medicale
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
                    <FormText>Paleur :</FormText>{' '}
                    <Input
                      placeholder="Observation"
                      name="paleur"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>Ictere</FormText>{' '}
                    <Input
                      placeholder="Observation"
                      name="ictere"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText> Cyanose:</FormText>{' '}
                    <Input
                      placeholder="Observation"
                      name="cyanose"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>Marbures: </FormText>{' '}
                    <Input
                      placeholder="Observation"
                      name="marbure"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>Sueurs: </FormText>{' '}
                    <Input
                      placeholder="Observation"
                      name="sueurs"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>Etat De Vigilence: </FormText>{' '}
                    <Input
                      placeholder="Observation"
                      name="etat_de_vigilence"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>
                      {' '}
                      Attitude (Proscration,tristesse,agitatoire):{' '}
                    </FormText>
                    <Input
                      placeholder="Observation"
                      name="attitude"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>Odeurs:</FormText>
                    <Input
                      placeholder="Observation"
                      name="odeurs"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText> Etat d'Hygiene: </FormText>
                    <Input
                      placeholder="Observation"
                      name="hygiene"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>Dysphonie:</FormText>
                    <Input
                      placeholder="Observation"
                      name="dysphonie"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  {' '}
                  <div>
                    <FormText>Degre D'autonomie</FormText>
                    <Input
                      placeholder="Observation"
                      name="autonomie"
                      onChange={this.handleChange}
                    />{' '}
                  </div>
                </Col>
                <Col md="6"></Col>
              </Row>
            </Collapse>
          </CardBody>
        </Card>
      </div>
    );
  }
}

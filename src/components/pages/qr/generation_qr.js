import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { connect } from 'react-redux';
import {
  Card,
  Col,
  CardBody,
  Input,
  Button,
  Row,
  Form,
  CardHeader,
  Label,
  FormGroup,
} from 'reactstrap';

import { APP_COLOR, APP_COLOR2 } from '../../../constants/app_utils';

const mapStateToProps = (state) => {
  console.log('etat', state);
  return {
    datas: state.carte.Carte,
  };
};

function GenerateQR(props) {
  const [nbQr, setnbQr] = useState(1);
  const [qrscode, setqrscode] = useState();
  var valQR = GetQrnumber();

  useEffect(() => {
    setqrscode(props.datas);
    GetQrnumber();
  }, [props.datas]);

  // GetQrnumber(qrscode)

  function GetQrnumber() {
    try {
      let test =
        props.datas &&
        props.datas.map((e) =>
          e.SerialNumber.toString().substring(
            [e.SerialNumber.toString().split('').length - 2],
            [e.SerialNumber.toString().split('').length]
          )
        );
      console.log('test', test[test.length - 1]);
      return +test[test.length - 1];
    } catch (err) {
      console.log(err);
    }
  }

  function handleNbQrChange(e) {
    setnbQr(e.target.value);
  }
  const downloadQR = () => {
    console.log('Qr ', valQR);
    for (let i = 0; i < nbQr; i++) {
      valQR += 1;
      var canvas = document.getElementById('canvas');

      QRCode.toCanvas(canvas, `${valQR}`, function(error) {
        if (error) console.error(error);
        console.log('success!');
      });
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `123456${valQR}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <div>
      <Card>
        <Card>
          <CardHeader color="primary">
            <h4>Generer des codes QR</h4>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="6">
                <FormGroup row>
                  <Label for="Patientinput3" sm={4}>
                    valeur du QR:
                  </Label>
                  <Col sm={8}>
                    <Input
                      labelText="valeur du QR"
                      id="postal-code"
                      //   formControlProps={{
                      //     fullWidth: true,
                      //   }}
                      //   multilines={true}
                      //   Require={true}
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup row>
                  <Label for="Patientinput3" sm={4}>
                    Nombre de Qr a Generer:
                  </Label>
                  <Col sm={8}>
                    <Input
                      labelText="nombre de codes à generer"
                      id="postal-code"
                      value={nbQr}
                      onChange={handleNbQrChange}
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Button onClick={downloadQR} className={APP_COLOR}>
              Generer
            </Button>

            <canvas id="canvas"></canvas>
          </CardBody>
        </Card>
      </Card>
    </div>
  );
}

export default connect(mapStateToProps)(GenerateQR);

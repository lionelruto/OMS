import React from 'react';
import QRCode from 'qrcode';
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

export default function GenerateQR() {
  var valQR = 20;

  const downloadQR = () => {
    for (let i = 0; i < 5; i++) {
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
      downloadLink.download = '123456.png';
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
                    //   formControlProps={{
                    //     fullWidth: true,
                    //   }}
                    //   multilines={true}
                    //   Require={true}
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Button onClick={downloadQR} variant="contained" color="info">
              Démarer
            </Button>

            <canvas id="canvas"></canvas>
          </CardBody>
        </Card>
      </Card>
    </div>
  );
}

import React, {Component} from 'react';
import {Row, Col} from 'antd';
import UnidadMedida from './UnidadMedida';
import '../styles.css';

class UnidadesMedida extends Component {
  render() {
    const {ancho, alto, largo, peso} = this.props;
    return (
      <div className="segmento">
        <Row type="flex">
          <Col span={6} order={1}>
            <UnidadMedida title="Ancho (cm)" value={ancho} />
          </Col>
          <Col span={6} order={2}>
            <UnidadMedida title="Alto (cm)" value={alto} />
          </Col>
          <Col span={6} order={3}>
            <UnidadMedida title="Largo (cm)" value={largo} />
          </Col>
          <Col span={6} order={4}>
            <UnidadMedida title="Peso (kg)" value={peso} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            * Para números decimales debes utilizar puntos. Ejemplo: (13.3)
          </Col>
        </Row>
      </div>
    );
  }
}

export default UnidadesMedida;

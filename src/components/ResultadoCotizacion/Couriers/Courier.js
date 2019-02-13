import React from 'react';
import {Row, Col} from 'antd';
import Segment from '../../Utils/Segment';

const Courier = ({cost, days, original_courier, typeDelivery}) => (
  <Segment title="Courier Seleccionado según configuración predeterminada">
    <Row>
      <Col span={6}>{original_courier}</Col>
      <Col span={6}>{typeDelivery}</Col>
      <Col span={6}>{days}</Col>
      <Col span={6}>{`${cost}*`}</Col>
    </Row>
  </Segment>
);

export default Courier;

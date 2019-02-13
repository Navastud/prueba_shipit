import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd';

const Courier = ({cost, days, original_courier, typeDelivery}) => (
  <Row>
    <Col span={6}>{original_courier}</Col>
    <Col span={6}>{typeDelivery}</Col>
    <Col span={6}>{days}</Col>
    <Col span={6}>{`${cost}*`}</Col>
  </Row>
);

Courier.propTypes = {
  cost: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  original_courier: PropTypes.string.isRequired,
  typeDelivery: PropTypes.string.isRequired,
};

export default Courier;

import React, {Component} from 'react';
import {Form, Row, Col, Button} from 'antd';
import Segment from '../Utils/Segment';
import FieldNumber from '../Fields/FieldNumber';
import LectorComunasContainers from '../../containers/LectorComunasContainer';

class Calculadora extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Segment title="Cotiza el mejor precio" icon="search">
        <Form onSubmit={this.handleSubmit}>
          <Row type="flex" align="middle">
            <Col span={12}>
              <LectorComunasContainers />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col span={6}>
              <FieldNumber
                label="Ancho (cm)"
                name="ancho"
                min={1}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            <Col span={6}>
              <FieldNumber
                label="Alto (cm)"
                name="alto"
                min={1}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            <Col span={6}>
              <FieldNumber
                label="Largo (cm)"
                name="largo"
                min={1}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            <Col span={6}>
              <FieldNumber
                label="Peso (kg)"
                name="peso"
                min={1}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            Cortizar
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default Form.create({name: 'calculadora'})(Calculadora);

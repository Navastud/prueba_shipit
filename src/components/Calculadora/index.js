import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Row, Col, Button} from 'antd';
import Segment from '../Utils/Segment';
import FieldNumber from '../Fields/FieldNumber';
import FieldSelect from '../Fields/FieldSelect';
import LectorComunasContainers from '../../containers/LectorComunasContainer';

//{"package":{ "length": "10", "width": "10", "height": "10", "weight": "1", "destiny": "Domicilio", "to_commune_id": "308" }

class Calculadora extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const {form, handlerChange, handlerCotizacion} = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Valores del formulario: ', values);
        handlerCotizacion({...values});
        handlerChange();
      }
    });
  };

  handleSelectChange = ({key}) => {
    console.log(key);
    this.props.form.setFieldsValue({
      to_commune_id: key,
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Segment title="Cotiza el mejor precio" icon="search">
        <Form onSubmit={this.handleSubmit}>
          <Row type="flex" align="middle">
            <Col span={12}>
              <FieldSelect
                label="Seleccione el destino"
                name="to_commune_id"
                getFieldDecorator={getFieldDecorator}>
                <LectorComunasContainers
                  handlerOnChange={this.handleSelectChange}
                />
              </FieldSelect>
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col span={6}>
              <FieldNumber
                label="Ancho (cm)"
                name="width"
                min={1}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            <Col span={6}>
              <FieldNumber
                label="Alto (cm)"
                name="height"
                min={1}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            <Col span={6}>
              <FieldNumber
                label="Largo (cm)"
                name="length"
                min={1}
                getFieldDecorator={getFieldDecorator}
              />
            </Col>
            <Col span={6}>
              <FieldNumber
                label="Peso (kg)"
                name="weight"
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

Calculadora.propTypes = {
  handlerCotizacion: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default Form.create({name: 'calculadora'})(Calculadora);

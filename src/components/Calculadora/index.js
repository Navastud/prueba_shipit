import React, {Component} from 'react';
import {Card, Icon, Button, Form} from 'antd';
import SelectorComuna from './SelectorComuna';
import UnidadesMedida from './UnidadesMedida';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

class Calculadora extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
  handleCotizar = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {comunas, unidades, form} = this.props;
    const {getFieldsError} = form;

    return (
      <Form onSubmit={this.handleCotizar}>
        <Card
          title={
            <h3>
              <Icon type="search" /> Cotiza el mejor precio
            </h3>
          }>
          <SelectorComuna comunas={comunas} form={form} />
          <UnidadesMedida {...unidades} form={form} />
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}>
            Cotizar
          </Button>
        </Card>
      </Form>
    );
  }
}

export default Form.create({name: 'calculadora'})(Calculadora);

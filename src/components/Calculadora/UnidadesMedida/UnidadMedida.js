import React from 'react';
import {InputNumber, Form} from 'antd';

const UnidadMedida = ({value, title, fieldError, getFieldDecorator}) => (
  <Form.Item validateStatus={fieldError ? 'error' : ''} help={fieldError || ''}>
    {getFieldDecorator('userName', {
      rules: [{required: true, message: 'Please input your username!'}],
    })(
      <label htmlFor={title}>
        {title}
        {'  '}
        <InputNumber min={1} defaultValue={value} />
      </label>,
    )}
  </Form.Item>
);
export default UnidadMedida;

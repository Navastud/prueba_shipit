import React from 'react';
import PropTypes from 'prop-types';
import {Form, InputNumber} from 'antd';

const FieldNumber = ({name, value, label, min, getFieldDecorator}) => (
  <Form.Item label={label}>
    {getFieldDecorator(name, {
      validateTrigger: ['onChange', 'onBlur'],
      rules: [
        {
          required: true,
          message: 'Campo requerido!',
        },
      ],
      initialValue: value,
    })(<InputNumber min={min} />)}
  </Form.Item>
);

FieldNumber.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default FieldNumber;

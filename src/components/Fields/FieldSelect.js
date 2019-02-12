import React from 'react';
import PropTypes from 'prop-types';
import {Form} from 'antd';

const FieldSelect = ({name, value, label, getFieldDecorator, children}) => (
  <Form.Item label={label}>
    {getFieldDecorator(name, {
      rules: [
        {
          required: true,
          message: 'Seleccione una opción!',
        },
      ],
      initialValue: value,
    })(children)}
  </Form.Item>
);

FieldSelect.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FieldSelect;

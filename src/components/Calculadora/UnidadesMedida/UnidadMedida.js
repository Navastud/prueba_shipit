import React from 'react';
import {InputNumber} from 'antd';

const UnidadMedida = ({value, title}) => (
  <label htmlFor={title}>
    {title}
    {'  '}
    <InputNumber min={1} defaultValue={value} />
  </label>
);
export default UnidadMedida;

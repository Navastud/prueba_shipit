import React from 'react';
import {Alert} from 'antd';

const ErrorMessage = ({error}) => (
  <Alert
    message="Ha ocurrido un error al procesar su solicitud"
    description={
      <p>
        Detalle error: <br />
        {error}
      </p>
    }
    type="error"
  />
);

export default ErrorMessage;

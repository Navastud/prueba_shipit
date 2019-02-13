import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd';
import ResultadoCotizacion from '../../components/ResultadoCotizacion';
import ErrorMessage from '../../components/Utils/ErrorMessage';

class ResultadoCotizacionContainer extends Component {
  render() {
    const {couriers, loading, error} = this.props;

    if (error) {
      return <ErrorMessage error={error} />;
    }

    return (
      <Spin tip="Cargando datos..." spinning={loading}>
        <ResultadoCotizacion couriers={couriers} />
      </Spin>
    );
  }
}

ResultadoCotizacionContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  couriers: PropTypes.arrayOf({
    cost: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    original_courier: PropTypes.string.isRequired,
    volumetric_weight: PropTypes.number.isRequired,
    typeDelivery: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResultadoCotizacionContainer;

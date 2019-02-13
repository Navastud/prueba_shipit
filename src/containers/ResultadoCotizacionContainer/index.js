import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Spin} from 'antd';
import ResultadoCotizacion from '../../components/ResultadoCotizacion';
import ErrorMessage from '../../components/Utils/ErrorMessage';

class ResultadoCotizacionContainer extends Component {
  render() {
    const {couriers, loading, error} = this.props;

    console.log(couriers);
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
  couriers: PropTypes.arrayOf(
    PropTypes.shape({
      cost: PropTypes.string.isRequired,
      days: PropTypes.number.isRequired,
      original_courier: PropTypes.string.isRequired,
      volumetric_weight: PropTypes.number.isRequired,
      typeDelivery: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => {
  const {couriers, loading, error} = state.couriersState;
  return {couriers, loading, error};
};

export default connect(
  mapStateToProps,
  undefined,
)(ResultadoCotizacionContainer);

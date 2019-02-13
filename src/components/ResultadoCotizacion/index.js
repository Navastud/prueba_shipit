import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Couriers from './Couriers';
import Segment from '../Utils/Segment';

class ResultadoCotizacion extends Component {
  render() {
    const {couriers} = this.props;
    return (
      <Segment title="Resultados de tu cotización">
        <Couriers couriers={couriers} />
      </Segment>
    );
  }
}

ResultadoCotizacion.propTypes = {
  prices: PropTypes.arrayOf({
    cost: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    original_courier: PropTypes.string.isRequired,
    volumetric_weight: PropTypes.number.isRequired,
    typeDelivery: PropTypes.string.isRequired,
  }),
};

export default ResultadoCotizacion;

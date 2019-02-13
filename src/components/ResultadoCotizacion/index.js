import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Couriers from './Couriers';
import Courier from './Couriers/Courier';
import Segment from '../Utils/Segment';

class ResultadoCotizacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courier: null,
    };
  }

  handlerChangeCourier = (courier) => {
    this.setState({courier});
    console.log('courier:', courier);
    console.log('Courier ha sido seleccionado');
  };

  render() {
    const {couriers} = this.props;
    const {courier} = this.state;
    return (
      <div>
        <Segment title="Resultados de tu cotización">
          <Couriers
            couriers={couriers}
            handlerChangeCourier={this.handlerChangeCourier}
          />
        </Segment>
        {courier && (
          <Segment title="Courier Seleccionado según configuración predeterminada">
            <Courier {...courier} />
          </Segment>
        )}
      </div>
    );
  }
}

ResultadoCotizacion.propTypes = {
  couriers: PropTypes.arrayOf({
    cost: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    original_courier: PropTypes.string.isRequired,
    volumetric_weight: PropTypes.number.isRequired,
    typeDelivery: PropTypes.string.isRequired,
  }),
};

export default ResultadoCotizacion;

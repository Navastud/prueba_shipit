import React, {Component} from 'react';
import Couriers from './Couriers';

class ResultadoCotizacion extends Component {
  render() {
    const {couriers} = this.props;
    return (
      <div>
        <Couriers couriers={couriers} />
      </div>
    );
  }
}

export default ResultadoCotizacion;

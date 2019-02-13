import React from 'react';
import {connect} from 'react-redux';
import Calculadora from '../../components/Calculadora';
import * as acciones from '../../actions';

const CalculadoraContainers = ({handlerCotizacion}) => (
  <Calculadora handlerCotizacion={handlerCotizacion} />
);

const mapDispatchToProps = (dispatch) => ({
  handlerCotizacion: (payload) => dispatch(acciones.findCouriers(payload)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(CalculadoraContainers);

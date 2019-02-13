import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Calculadora from '../../components/Calculadora';
import * as acciones from '../../actions';

const CalculadoraContainers = ({handlerCotizacion, handlerChange}) => (
  <Calculadora
    handlerCotizacion={handlerCotizacion}
    handlerChange={handlerChange}
  />
);

CalculadoraContainers.propTypes = {
  handlerCotizacion: PropTypes.func.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handlerCotizacion: (payload) => dispatch(acciones.findCouriers(payload)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(CalculadoraContainers);

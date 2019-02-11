import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert} from 'antd';
import SelectorComuna from '../../../components/Calculadora/SelectorComuna';
import * as acciones from '../../../actions';

class SelectorComunaContainers extends Component {
  render() {
    const {loading, error, comunas} = this.props;

    if (loading || error) {
      return (
        <Alert
          message="Cargando datos..."
          type={(loading && 'info') || (error && 'error')}
        />
      );
    }

    return <SelectorComuna comunas={comunas} />;
  }
}

const mapStateToProps = (state) => {
  const {comunas, loading, error} = state.comunasState;
  return {comunas, loading, error};
};

const mapDispatchToProps = (dispatch) => ({
  hanlderComunas: () => dispatch(acciones.findAllComunas()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectorComunaContainers);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert} from 'antd';
import LectorComunas from '../../components/LectorComunas';
import * as acciones from '../../actions';

let comunasDefault = [
  {
    id: 38,
    region_id: 5,
    name: 'LOS VILOS',
    code: '04203',
  },
  {
    id: 37,
    region_id: 5,
    name: 'CANELA',
    code: '04202',
  },
];

class LectorComunasContainers extends Component {
  componentDidMount() {
    const {hanlderComunas} = this.props;
    hanlderComunas();
  }
  render() {
    const {loading, error, comunas, handlerOnChange} = this.props;

    if (!loading && comunas.length > 0) {
      comunasDefault = comunas;
    }

    if (loading || error) {
      return (
        <Alert
          message="Cargando datos..."
          type={(loading && 'info') || (error && 'error')}
        />
      );
    }

    return (
      <LectorComunas
        comunas={comunasDefault}
        handlerOnChange={handlerOnChange}
      />
    );
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
)(LectorComunasContainers);

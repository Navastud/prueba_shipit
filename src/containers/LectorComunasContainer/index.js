import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Spin} from 'antd';
import LectorComunas from '../../components/LectorComunas';
import ErrorMessage from '../../components/Utils/ErrorMessage';
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

class LectorComunasContainer extends Component {
  componentDidMount() {
    const {hanlderComunas} = this.props;
    hanlderComunas();
  }
  render() {
    const {loading, error, comunas, handlerOnChange} = this.props;

    if (!loading && comunas.length > 0) {
      comunasDefault = comunas;
    }

    if (error) {
      return <ErrorMessage error={error} />;
    }

    return (
      <Spin tip="Cargando datos..." spinning={loading}>
        <LectorComunas
          comunas={comunasDefault}
          handlerOnChange={handlerOnChange}
        />
      </Spin>
    );
  }
}

LectorComunasContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  comunas: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    region_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
  hanlderComunas: PropTypes.func.isRequired,
};

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
)(LectorComunasContainer);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

const {Column} = Table;

class Couriers extends Component {
  render() {
    const {couriers, handlerChangeCourier} = this.props;
    return (
      <Table
        dataSource={couriers}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              handlerChangeCourier({...record});
            },
          };
        }}>
        <Column
          title="Courier"
          dataIndex="original_courier"
          key="original_courier"
        />
        <Column
          title="Tipo de Entrega"
          dataIndex="typeDelivery"
          key="typeDelivery"
        />
        <Column title="Plazo Estimado" dataIndex="days" key="days" />
        <Column
          title="Peso Equivalente"
          dataIndex="volumetric_weight"
          key="volumetric_weight"
        />
        <Column title="Precio Mercado" dataIndex="cost" key="cost" />
      </Table>
    );
  }
}

Couriers.propTypes = {
  couriers: PropTypes.arrayOf(
    PropTypes.shape({
      cost: PropTypes.string.isRequired,
      days: PropTypes.number.isRequired,
      original_courier: PropTypes.string.isRequired,
      volumetric_weight: PropTypes.number.isRequired,
      typeDelivery: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handlerChangeCourier: PropTypes.func.isRequired,
};

export default Couriers;

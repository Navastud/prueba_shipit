import React, {Component} from 'react';
import {Table, Column} from 'antd';

class Couriers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {couriers} = this.props;
    return (
      <Table dataSource={couriers}>
        <Column title="Courier" dataIndex="courier" key="courier" />
        <Column
          title="Tipo de Entrega"
          dataIndex="tipoEntrega"
          key="tipoEntrega"
        />
        <Column
          title="Plazo Estimado"
          dataIndex="plazoEstimado"
          key="plazoEstimado"
        />
        <Column
          title="Precio Mercado"
          dataIndex="precioMercado"
          key="precioMercado"
        />
      </Table>
    );
  }
}

export default Couriers;

import React, {Component} from 'react';
import {Card, Icon} from 'antd';
import SelectorComuna from './SelectorComuna';
import UnidadesMedida from './UnidadesMedida';

class Calculadora extends Component {
  render() {
    const {comunas, unidades} = this.props;
    return (
      <Card
        title={
          <h3>
            <Icon type="search" /> Cotiza el mejor precio
          </h3>
        }>
        <SelectorComuna comunas={comunas} />
        <UnidadesMedida {...unidades} />
      </Card>
    );
  }
}

export default Calculadora;

import React, {Component} from 'react';
import {Alert, Select} from 'antd';

const Option = Select.Option;

class LectorComunas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
    };
  }

  getDefaultValue = () => {
    const {comunas} = this.props;
    const {selected} = this.state;
    const comuna = comunas.find(({id}) => id === selected);

    return (
      comuna &&
      Object.assign({
        key: comuna.name,
        value: comuna.id,
      })
    );
  };

  render() {
    const {comunas, handlerOnChange} = this.props;
    const defaultValue = this.getDefaultValue();

    if (comunas.length === 0) {
      return (
        <Alert message="No se han cargado las comunas" type="error" showIcon />
      );
    }

    return (
      <Select
        size="large"
        labelInValue
        defaultValue={defaultValue}
        placeholder="Seleccione una comuna"
        style={{width: '100%'}}
        onChange={handlerOnChange}>
        {comunas.map(({id, name}) => (
          <Option key={id} value={id}>
            {name}
          </Option>
        ))}
      </Select>
    );
  }
}

export default LectorComunas;

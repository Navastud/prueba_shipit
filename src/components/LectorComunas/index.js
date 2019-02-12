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

  handlerOnChange = (value) => {
    this.setState({selected: value});
    console.log('handlerOnChange:', value);
  };

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
    const {comunas} = this.props;
    const defaultValue = this.getDefaultValue();

    if (comunas.length === 0) {
      return (
        <Alert message="No se han cargado las comunas" type="error" showIcon />
      );
    }

    return (
      <div>
        <Select
          size="large"
          labelInValue
          defaultValue={defaultValue}
          placeholder="Seleccione una comuna"
          style={{width: '100%'}}
          onChange={this.handlerOnChange}>
          {comunas.map(({id, name}) => (
            <Option key={id}>{name}</Option>
          ))}
        </Select>
      </div>
    );
  }
}

export default LectorComunas;

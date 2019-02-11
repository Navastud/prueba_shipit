import React, {Component} from 'react';
import {Select} from 'antd';

const Option = Select.Option;

class SelectorComuna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [],
      defaultValue: undefined,
    };
  }

  componentWillMount() {
    const {comunas, selected} = this.props;
    const children = comunas.map(({id, nombre}) => (
      <Option key={id}>{nombre}</Option>
    ));

    let defaultValue;
    const comuna = this.getComuna(selected);
    if (comuna) {
      const {id, nombre} = comuna;
      defaultValue = {key: nombre, value: id};
    }

    this.setState({children, defaultValue});
  }

  getComuna = (selected) => {
    const {comunas} = this.props;
    return comunas.find(({id}) => id === selected);
  };

  handleChange = (value) => {
    this.setState({selected: value});
  };

  render() {
    const {children, defaultValue} = this.state;

    if (children.length === 0) {
      return <div>No hay comunas cargadas</div>;
    }

    return (
      <Select
        labelInValue
        defaultValue={defaultValue}
        placeholder="Seleccione comuna"
        style={{width: '100%'}}
        onChange={this.handleChange}
        tokenSeparators={[',']}>
        {children}
      </Select>
    );
  }
}

export default SelectorComuna;

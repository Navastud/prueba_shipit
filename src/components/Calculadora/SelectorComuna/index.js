import React, {Component} from 'react';
import {Select, Alert} from 'antd';
import '../styles.css';

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
    const {selected} = this.props;
    const children = this.getChildren();
    const comuna = this.getComuna(selected);
    let defaultValue;
    if (comuna) {
      const {id, nombre} = comuna;
      defaultValue = {key: nombre, value: id};
    }

    this.setState({children, defaultValue});
  }

  getChildren = () => {
    const {comunas} = this.props;
    return comunas
      ? comunas.map(({id, nombre}) => <Option key={id}>{nombre}</Option>)
      : [];
  };

  getComuna = (selected) => {
    const {comunas} = this.props;
    return comunas ? comunas.find(({id}) => id === selected) : undefined;
  };

  handleChange = (value) => {
    this.setState({selected: value});
  };

  render() {
    const {children, defaultValue} = this.state;

    return (
      <div className="segmento">
        {children.length === 0 ? (
          <Alert message="No hay comunas cargadas" type="error" />
        ) : (
          <Select
            labelInValue
            defaultValue={defaultValue}
            placeholder="Seleccione comuna"
            style={{width: '100%'}}
            onChange={this.handleChange}
            tokenSeparators={[',']}>
            {children}
          </Select>
        )}
      </div>
    );
  }
}

export default SelectorComuna;

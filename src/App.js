import React, {Component} from 'react';
import {Layout} from 'antd';
import CalculadoraContainer from './containers/CalculadoraContainer';
import ResultadoCotizacionContainer from './containers/ResultadoCotizacionContainer';

const {Content} = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarResultados: false,
    };
  }

  handlerChangeMostrarResultado = () => {
    this.setState({mostrarResultados: true});
  };
  render() {
    const {mostrarResultados} = this.state;
    return (
      <Content style={{margin: '24px 16px 0'}}>
        <CalculadoraContainer
          handlerChange={this.handlerChangeMostrarResultado}
        />
        {mostrarResultados && <ResultadoCotizacionContainer />}
      </Content>
    );
  }
}

export default App;

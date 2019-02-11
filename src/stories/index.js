import React from 'react';
import 'antd/dist/antd.css';
import {storiesOf} from '@storybook/react';
import SelectorComuna from '../components/Calculadora/SelectorComuna';
import UnidadesMedida from '../components/Calculadora/UnidadesMedida';
import Calculadora from '../components/Calculadora';

const comunas = [{id: 1, nombre: 'Maipú'}, {id: 2, nombre: 'San Bernardo'}];
const unidades = {
  ancho: 10,
  alto: 10,
  largo: 10,
  peso: 1,
};
storiesOf('Selector Comunas', module) //
  .add('Sin comunas cargadas', () => <SelectorComuna comunas={[]} />) //
  .add('Con comunas cargadas', () => <SelectorComuna comunas={comunas} />) //
  .add('Con comuna seleccionada', () => (
    <SelectorComuna comunas={comunas} selected={1} />
  ));

storiesOf('Unidades de Medida', module) //
  .add('Sin Unidades ingresadas', () => <UnidadesMedida />) //
  .add('Con Unidades ingresadas', () => <UnidadesMedida {...unidades} />);

storiesOf('Calculadora', module) //
  .add('Calculadora sin datos', () => <Calculadora />) //
  .add('Calculadora con  datos', () => (
    <Calculadora {...unidades} comunas={comunas} />
  ));

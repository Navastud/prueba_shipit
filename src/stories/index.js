import React from 'react';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import {storiesOf} from '@storybook/react';
import LectorComunas from '../components/LectorComunas';
import LectorComunasContainer from '../containers/LectorComunasContainer';
import Calculadora from '../components/Calculadora';
import store from '../store';

const comunas = [
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

storiesOf('Lector comunas', module) //
  .addDecorator((story) => <Provider stProviderore={store}>{story()}</Provider>)
  .add('Lector comunas sin datos cargados', () => (
    <LectorComunas comunas={[]} />
  )) //
  .add('Lector comunas con datos cargados', () => (
    <LectorComunas comunas={comunas} />
  ))
  .add('Lector comunas con comuna seleccionada', () => (
    <LectorComunas comunas={comunas} selected={38} />
  ))
  .add('Lector comunas cargadas desde servidor', () => (
    <LectorComunasContainer comunas={comunas} selected={38} />
  ));

storiesOf('Calculadora', module) //
  .addDecorator((story) => <Provider stProviderore={store}>{story()}</Provider>) //
  .add('Calculadora sin datos', () => <Calculadora />);

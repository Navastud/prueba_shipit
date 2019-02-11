import React from 'react';
import 'antd/dist/antd.css';
import {storiesOf} from '@storybook/react';
import SelectorComuna from '../components/Calculadora/SelectorComuna';

const comunas = [{id: 1, nombre: 'Maipú'}, {id: 2, nombre: 'San Bernardo'}];

storiesOf('Selector Comunas', module) //
  .add('Sin comunas cargadas', () => <SelectorComuna comunas={[]} />) //
  .add('Con comunas cargadas', () => <SelectorComuna comunas={comunas} />) //
  .add('Con comuna seleccionada', () => (
    <SelectorComuna comunas={comunas} selected={1} />
  ));

import React from 'react';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';
import {storiesOf} from '@storybook/react';
import LectorComunas from '../components/LectorComunas';
import LectorComunasContainer from '../containers/LectorComunasContainer';
import Calculadora from '../components/Calculadora';
import CalculadoraContainer from '../containers/CalculadoraContainer';
import ResultadoCotizacion from '../components/ResultadoCotizacion';
import Courier from '../components/ResultadoCotizacion/Couriers/Courier';
import configuedStore from '../configuedStore';
import couriersJson from '../json/couriers.json';
import {normalizarCouriers} from '../services/courierService';

const couriers = normalizarCouriers(couriersJson);

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
  .addDecorator((getStory) => (
    <Provider store={configuedStore}>{getStory()}</Provider>
  )) //
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
  .addDecorator((getStory) => (
    <Provider store={configuedStore}>{getStory()}</Provider>
  )) //
  .add('Calculadora sin datos', () => <Calculadora />) //
  .add('Calculadora procesa datos', () => <CalculadoraContainer />);

storiesOf('Resultado Cotizacion', module) //
  .addDecorator((getStory) => (
    <Provider store={configuedStore}>{getStory()}</Provider>
  )) //
  .add('Resultado de cotizacion', () => (
    <ResultadoCotizacion couriers={couriers} />
  )) //
  .add('Courier seleccionado', () => <Courier {...couriers[0]} />);

import {all, call} from 'redux-saga/effects';
import findAllComunas from './comunas';
import findPrices from './cotizacion';

export default function* rootSaga() {
  yield all([call(findAllComunas), call(findPrices)]);
}

import {all, call} from 'redux-saga/effects';
import findAllComunas from './comunas';
import findCouriers from './couriers';

export default function* rootSaga() {
  yield all([call(findAllComunas), call(findCouriers)]);
}

import {all, call} from 'redux-saga/effects';
import findAllComunas from './comunas';

export default function* rootSaga() {
  yield all([call(findAllComunas)]);
}

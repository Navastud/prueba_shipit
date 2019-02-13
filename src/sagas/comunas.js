import {put, takeEvery, call} from 'redux-saga/effects';
import axios from './axios';
import * as type from '../constants/ActionsType';

function* findAllComunasFetch() {
  try {
    const response = yield call(() => axios.get('/communes'));
    const comunas = response.data;
    yield put({
      type: type.FIND_ALL_COMUNAS_FETCH_SUCCEEDED,
      payload: {comunas},
    });
  } catch (e) {
    const error = e.message | 'Ha ocurrido un error!!';
    yield put({
      type: type.FIND_ALL_COMUNAS_FETCH_FAILED,
      payload: {error},
    });
  }
}
function* findAllComunas() {
  yield takeEvery(type.FIND_ALL_COMUNAS_FETCH_REQUESTED, findAllComunasFetch);
}

export default findAllComunas;

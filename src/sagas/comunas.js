import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../constants/ActionsType';

function* findAllComunasFetch() {
  try {
    const request = yield call(() => {
      axios.get('https://api.shipit.cl/v/communes', {
        headers: {
          'Content-Type': 'application/json',
          'X-Shipit-Email': 'prueba_front@shipit.cl',
          'X-Shipit-Access-Token': 'MWhEAdkHKYdscen_4cxR',
          Accept: 'application/vnd.shipit.v2',
        },
      });
    });

    const comunas = request.data;
    console.log('comunas', comunas);
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

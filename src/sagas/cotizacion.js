import {put, takeEvery, call} from 'redux-saga/effects';
import axios from './axios';
import * as type from '../constants/ActionsType';
import {normalizarCouriers} from '../services/courierService';

function* findCouriersFetch(action) {
  try {
    const {length, width, height, weight, to_commune_id} = action.payload;
    const data = JSON.stringify({
      package: {
        length: length,
        width: width,
        height: height,
        weight: weight,
        destiny: 'Domicilio',
        to_commune_id: to_commune_id,
      },
    });
    const response = yield call(() =>
      axios.post('prices', data, {
        headers: {Accept: 'application/vnd.shipit.v3'},
      }),
    );
    const courier = normalizarCouriers(response.data);
    yield put({
      type: type.FIND_COURIERS_FETCH_SUCCEEDED,
      payload: {courier},
    });
  } catch (e) {
    const error = e.message | 'Ha ocurrido un error!!';
    yield put({
      type: type.FIND_COURIERS_FETCH_FAILED,
      payload: {error},
    });
  }
}
function* findCouriers() {
  yield takeEvery(type.FIND_COURIERS_FETCH_REQUESTED, findCouriersFetch);
}

export default findCouriers;

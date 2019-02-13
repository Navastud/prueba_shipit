import {put, takeEvery, call} from 'redux-saga/effects';
import axios from './axios';
import * as type from '../constants/ActionsType';
import {normalizarCouriers} from '../services/courierService';

function* findPricesFetch(action) {
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
    const prices = normalizarCouriers(response.data);
    console.log('prices:', prices);
    yield put({
      type: type.FIND_PRICES_FETCH_SUCCEEDED,
      payload: {prices},
    });
  } catch (e) {
    const error = e.message | 'Ha ocurrido un error!!';
    yield put({
      type: type.FIND_PRICES_FETCH_FAILED,
      payload: {error},
    });
  }
}
function* findPrices() {
  yield takeEvery(type.FIND_PRICES_FETCH_REQUESTED, findPricesFetch);
}

export default findPrices;

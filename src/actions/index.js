import * as type from '../constants/ActionsType';

export const findAllComunas = () => ({
  type: type.FIND_ALL_COMUNAS_FETCH_REQUESTED,
});

export const findPrices = (payload) => ({
  type: type.FIND_PRICES_FETCH_REQUESTED,
  payload,
});

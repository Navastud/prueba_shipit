import * as type from '../constants/ActionsType';

export const findAllComunas = () => ({
  type: type.FIND_ALL_COMUNAS_FETCH_REQUESTED,
});

export const findCouriers = (payload) => ({
  type: type.FIND_COURIERS_FETCH_REQUESTED,
  payload,
});

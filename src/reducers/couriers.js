import * as type from '../constants/ActionsType';

const INITIAL_STATE = {
  loading: true,
  error: '',
  couriers: [],
};

const couriersState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.FIND_COURIERS_FETCH_REQUESTED: {
      return {...state, loading: true};
    }
    case type.FIND_COURIERS_FETCH_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        couriers: action.payload.couriers,
      };
    }
    case type.FIND_COURIERS_FETCH_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default couriersState;

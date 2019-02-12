import * as type from '../constants/ActionsType';

const INITIAL_STATE = {
  loading: true,
  error: '',
  prices: [],
};

const cotizacionState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.FIND_PRICES_FETCH_REQUESTED: {
      return {...state, loading: true};
    }
    case type.FIND_PRICES_FETCH_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        prices: action.payload.prices,
      };
    }
    case type.FIND_PRICES_FETCH_FAILED: {
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

export default cotizacionState;

import * as type from '../constants/ActionsType';

const INITIAL_STATE = {
  loading: true,
  error: '',
  courier: [],
};

const cotizacionState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.FIND_COURIERS_FETCH_REQUESTED: {
      return {...state, loading: true};
    }
    case type.FIND_COURIERS_FETCH_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        courier: action.payload.courier,
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

export default cotizacionState;

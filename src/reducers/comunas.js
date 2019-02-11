import * as type from '../constants/ActionsType';

const INITIAL_STATE = {
  loading: true,
  error: '',
  comunas: [],
};

const comunasState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.FIND_ALL_COMUNAS_FETCH_REQUESTED: {
      return {...state, loading: true};
    }
    case type.FIND_ALL_COMUNAS_FETCH_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        comunas: action.payload.comunas,
      };
    }
    case type.FIND_ALL_COMUNAS_FETCH_FAILED: {
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

export default comunasState;

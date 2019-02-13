import {combineReducers} from 'redux';
import comunasState from './comunas';
import couriersState from './couriers';

const rootReducer = combineReducers({
  comunasState,
  couriersState,
});

export default rootReducer;

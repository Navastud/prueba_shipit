import {combineReducers} from 'redux';
import comunasState from './comunas';
import cotizacion from './cotizacion';

const rootReducer = combineReducers({
  comunasState,
  cotizacion,
});

export default rootReducer;

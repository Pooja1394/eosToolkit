/*
 *
 * Scatter reducer
 *
 */

import { fromJS } from 'immutable';
import { SCATTER_LOADED, EOSCLIENT_LOADED, ATTACHED_ACCOUNT, DETACHED_ACCOUNT } from './constants';

const initialState = fromJS({
  scatter: null,
  eosClient: null,
  eosAccount: '',
  eosAuthority: '',
});

function scatterReducer(state = initialState, action) {
  switch (action.type) {
    case SCATTER_LOADED:
      // console.log('Scatter reducer');
      return state.set('scatter', action.scatter);
    case EOSCLIENT_LOADED:
      // console.log('Eos built');
      return state.set('eosClient', action.eosClient);
    case ATTACHED_ACCOUNT:
      console.log('nanme  = ', action.name);
      return state.set('eosAccount', action.name);
    case DETACHED_ACCOUNT:
      return state.set('eosAccount', '');
    default:
      return state;
  }
}

export default scatterReducer;

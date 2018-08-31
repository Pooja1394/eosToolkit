/*
 *
 * CreateAccount reducer
 *
 */

import { fromJS } from 'immutable';

import { DEFAULT_ACTION, BLUR_ACTION, PAY_ACTION, SET_CURRENCY_VALUE, SET_FORM_VISIBLE } from './constants';

const initialState = fromJS({
  form: null,
  input: null,
  formVisible: null,
  payValue: null,
  currencyValue: { BTC: '', ETH: '' },
});

function createAccountReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('form', action.form);
    case BLUR_ACTION:
      return state.set('input', action.input);
    case PAY_ACTION:
      return state.set('payValue', action.payValue);
    case SET_CURRENCY_VALUE:
      return state.set('currencyValue', action.currency);
    case SET_FORM_VISIBLE:
      return state.set('formVisible', action.value);
    default:
      return state.set('formVisible', true);
  }
}

export default createAccountReducer;

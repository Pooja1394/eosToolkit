/*
 *
 * CreateAccount actions
 *
 */

import { DEFAULT_ACTION, BLUR_ACTION, PAY_ACTION, SET_CURRENCY_VALUE, SET_FORM_VISIBLE } from './constants';

export default function defaultAction(form) {
  console.log('submitAction = ', form);
  return {
    type: DEFAULT_ACTION,
    form,
  };
}
export function payAction(payValue) {
  console.log('payAction = ');
  return {
    type: PAY_ACTION,
    payValue,
  };
}

export function blurAction(input) {
  console.log('blurAction', input);
  return {
    type: BLUR_ACTION,
    input,
  };
}

export function setCurrencyValue(currency) {
  return {
    type: SET_CURRENCY_VALUE,
    currency,
  };
}
export function setFormVisible(value) {
  return {
    type: SET_FORM_VISIBLE,
    value,
  };
}

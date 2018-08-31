import { createSelector } from 'reselect';

/**
 * Direct selector to the delegate state domain
 */
const selectDomain = state => state.get('CreateAccount');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Delegate
 */

const makeSelectForm = () => createSelector(selectDomain, substate => substate.get('form'));
const makeSelectInput = () => createSelector(selectDomain, substate => substate.get('input'));
const makeFormVisible = () => createSelector(selectDomain, substate => substate.get('formVisible'));
const makePayWithCurrency = () => createSelector(selectDomain, substate => substate.get('payValue'));
const makeCurrencyValue = () => createSelector(selectDomain, substate => substate.get('currencyValue'));
// console.log('makeSelectInput ', makeSelectInput);

export default makeSelectForm;
export { selectDomain, makeSelectForm, makeSelectInput, makeFormVisible, makePayWithCurrency, makeCurrencyValue };

/**
 *
 * CreateAccount
 *
 */

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CreateAccountForm from 'components/CreateAccountForm';
// import { makeSelectEosAccount } from 'containers/Scatter/selectors';
import { makeFormVisible, makeCurrencyValue } from 'containers/CreateAccount/selectors';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import submitAction, { blurAction, payAction } from './actions';

const mapStateToProps = createStructuredSelector({
  // eosAccount: makeSelectEosAccount(),
  formVisible: makeFormVisible(),
  currency: makeCurrencyValue(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: form => dispatch(submitAction(form)),
    onBlurText: input => dispatch(blurAction(input)),
    handlePay: payValue => dispatch(payAction(payValue)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'CreateAccount', reducer });
const withSaga = injectSaga({ key: 'CreateAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(CreateAccountForm);

import { takeLatest, put, select, all } from 'redux-saga/effects';
import { basePath } from 'utils/constants';
import axios from 'axios';
import Web3 from 'web3';
// const Web3 = require('web3');

// import { Web3Provider } from 'react-web3';

// import EosClient, {
//   makeSelectEosAuthority as EosAuthority,
//   makeSelectEosAccount as EosAccount,
// } from 'containers/Scatter/selectors';
import { failureNotification, loadingNotification, successNotification } from 'containers/Notification/actions';
// import { loadingNotification } from 'containers/Notification/actions';

import Form, { makeSelectInput, makeCurrencyValue } from './selectors';
import { DEFAULT_ACTION, BLUR_ACTION, PAY_ACTION } from './constants';
import { setCurrencyValue, setFormVisible } from './actions';
const web3 = new Web3(window.web3.currentProvider);
// web3.eth
//   .getAccounts()
//   .then(res => {
//     console.log('res=>', res);
//   })
//   .catch(err => {
//     console.log('err=>', err);
//   });
//
// Get the EOS Client once Scatter loads
//
function* performAction() {
  console.log('performAction');
  try {
    const res = yield axios({
      method: 'get',
      url: `${basePath}user/getPayAmount`,
      json: true,
    });
    console.log('sucess ', res);
    yield put(setCurrencyValue(res.data));
    yield put(setFormVisible());
  } catch (err) {
    console.log('err =>', err);
  }
  // }

  // const eosClient = yield select(EosClient());
  // const form = yield select(Form());
  // console.log('form = ', form);
  // const eosAccount = yield select(EosAccount());
  // const eosAuth = yield select(EosAuthority());
  // yield put(loadingNotification());
  // try {
  //   const res = yield eosClient.transaction(tr => {
  //     tr.newaccount(
  //       {
  //         creator: eosAccount,
  //         name: form.name,
  //         owner: form.ownerKey,
  //         active: form.activeKey,
  //       },
  //       { authorization: [{ actor: eosAccount, permission: eosAuth }] }
  //     );
  //     tr.buyrambytes(
  //       {
  //         payer: eosAccount,
  //         receiver: form.name,
  //         bytes: Number(form.ram),
  //       },
  //       { authorization: [{ actor: eosAccount, permission: eosAuth }] }
  //     );
  //     tr.delegatebw(
  //       {
  //         from: eosAccount,
  //         receiver: form.name,
  //         stake_net_quantity: `${Number(form.net)
  //           .toFixed(4)
  //           .toString()} EOS`,
  //         stake_cpu_quantity: `${Number(form.cpu)
  //           .toFixed(4)
  //           .toString()} EOS`,
  //         transfer: form.transfer ? 1 : 0,
  //       },
  //       { authorization: [{ actor: eosAccount, permission: eosAuth }] }
  //     );
  //   });
  //   yield put(successNotification(res.transaction_id));
  // } catch (err) {
  //   yield put(failureNotification(err));
  // }
}
function* performBlur() {
  const input = yield select(makeSelectInput());
  if (input.target.value.length === 12) {
    try {
      const res = yield axios({
        method: 'post',
        url: `${basePath}user/nameAlreadyExist`,
        json: true,
        data: {
          name: input.target.value,
        },
      });
      console.log('sucess');
    } catch (err) {
      const status = err.response.status;
      if (status === 302) {
        const payload = {
          reason: 'Account Name Rejected!',
          message: err.response.statusText,
        };
        yield put(failureNotification(payload));
      }
    }
  }
}
function* performPayment() {
  console.log('web3 = ', web3);
  const form = yield select(Form());
  const currencyValue = yield select(makeCurrencyValue());
  console.log('form = ', form);
  const obj = {
    name: form.name,
    ownerKey: form.ownerKey,
    activeKey: form.activeKey,
    currency: 'ETH',
  };
  const account = yield web3.eth.getAccounts();
  console.log('acount', account);
  if (account.length > 0) {
    const sendFrom = account[0];
    const transactionObject = {
      from: sendFrom,
      to: currencyValue.SEND_TO,
      value: web3.utils.toWei(currencyValue.ETH, 'ether'),
    };
    try {
      const res = yield web3.eth.sendTransaction(transactionObject);
      console.log('res => ', res);
    } catch (err) {
      console.log('err=>', err);
    }
  } else {
    console.log('please select any account in meta Mask!');
  }

  // web3.eth.getAccounts().then(metaMask => {
  //   console.log('metaMask =>', metaMask);
  //   if (metaMask.length > 0) {
  //     const sendFrom = metaMask[0];
  //     const transactionObject = {
  //       from: sendFrom,
  //       to: currencyValue.SEND_TO,
  //       value: web3.utils.toWei(currencyValue.ETH, 'ether'),
  //     };
  //     try {
  //       const res = yield web3.eth.sendTransaction(transactionObject);
  //       console.log('res => ', res);
  //     } catch (err) {
  //       console.log('err=>', err);
  //     }
  //   } else {
  //     console.log('please select any account in meta Mask!');
  //   }
  // });
  // try {
  //   const res = yield axios({
  //     method: 'post',
  //     url: `${basePath}user/currencyAmount`,
  //     json: true,
  //     data: obj,
  //   });
  //   console.log('sucess ', res);

  //     .catch(err => {
  //       console.log('err=>', err);
  //     });
  // } catch (err) {
  //   console.log('err =>', err);
  // }
}
function* watchDefaultAction() {
  yield takeLatest(DEFAULT_ACTION, performAction);
  yield takeLatest(BLUR_ACTION, performBlur);
  yield takeLatest(PAY_ACTION, performPayment);
}

//
// Combine sagas into root saga
//

export default function* rootSaga() {
  yield all([watchDefaultAction()]);
}

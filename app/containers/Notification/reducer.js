/*
 *
 * Notification reducer
 *
 */

import { fromJS } from 'immutable';
import { NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE, NOTIFICATION_LOADING, NOTIFICATION_CLOSE } from './constants';

const initialState = fromJS({
  success: false,
  failure: false,
  loading: false,
  message: '',
  reason: '',
});

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_SUCCESS:
      // console.log('Success reducer');
      return state
        .set('message', action.message)
        .set('loading', false)
        .set('success', true)
        .set('failure', false);
    case NOTIFICATION_FAILURE:
      console.log('Failure reducer', action.payload);
      return state
        .set('message', action.payload.message)
        .set('reason', action.payload.reason)
        .set('loading', false)
        .set('success', false)
        .set('failure', true);
    case NOTIFICATION_LOADING:
      // console.log('Loading reducer');
      return state
        .set('loading', true)
        .set('success', false)
        .set('failure', false);
    case NOTIFICATION_CLOSE:
      // console.log('Closing reducer');
      return state
        .set('loading', false)
        .set('success', false)
        .set('failure', false);
    default:
      // console.log('Default reducer');
      return state;
  }
}

export default notificationReducer;

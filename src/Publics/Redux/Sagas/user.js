import {call, takeEvery, put} from 'redux-saga/effects';
import Axios from 'axios';

export function fetchUserCall () {
  return Axios.get ('https://randomuser.me/api/');
}

export function* fetchUserWorker (action) {
  try {
    const user = yield call (fetchUserCall);
    yield put ({
      type: 'SUCCESS',
      user: user.data.results,
    });
  } catch (e) {
    yield put ({
      type: 'ERROR',
      e,
    });
  }
}

export function* fetchUserWatcher () {
  yield takeEvery ('FETCH_USER', fetchUserWorker);
}

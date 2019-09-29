// import {takeEvery, call, put} from 'redux-saga/effects';
// import Axios from 'axios';

// export function* fetchUserWatcher () {
//   yield takeEvery ('FETCH_USER', fetchUserWorker);
// }

// export function* fetchUserWorker (action) {
//   try {
//     const user = yield call (fetchUserCall);
//     yield put ({
//       type: 'SUCCESS',
//       user,
//     });
//   } catch (error) {
//     yield put ({
//       type: 'ERROR',
//       error,
//     });
//   }
// }

// export function fetchUserCall () {
//   return Axios.get(`https://fortnite-api.theapinetwork.com/weapons/get/`, {
//     headers: {
//       Authorization: process.env.REACT_APP_KEY,
//     },
//   });
// }
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

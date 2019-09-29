import {all} from 'redux-saga/effects';

import {fetchUserWatcher} from './user';

function* rootSaga () {
  yield all ([fetchUserWatcher ()]);
}

export default rootSaga;

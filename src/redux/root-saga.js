import { all, call } from 'redux-saga/effects';

import { setCollectionsStart } from './shop/sagas';
import userSagas from './user/sagas';

export default function* () {
  yield all([
    call(setCollectionsStart),
    call(userSagas)
  ])
}
import { all, call } from 'redux-saga/effects';

import { onSetCollectionsStart } from './shop/sagas';
import userSagas from './user/sagas';

export default function* () {
  yield all([
    call(onSetCollectionsStart),
    call(userSagas)
  ])
}
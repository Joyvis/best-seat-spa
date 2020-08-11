import { all } from 'redux-saga/effects';
import eventsSaga from './event/saga';

export default function* rootSaga() {
  yield all([eventsSaga()]);
}

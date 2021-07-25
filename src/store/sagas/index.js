import {fork, all} from 'redux-saga/effects';
import mapSaga from './mapSaga';

export default function* rootSaga() {
  yield all([fork(mapSaga)]);
}

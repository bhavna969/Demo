import axios from 'axios';
import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';

export const ACCESS_TOKEN =
  'pk.eyJ1IjoiYmhhdm5hY2hhdWRoYXJ5IiwiYSI6ImNrcmE2ZHZxajRma2wyb3FwZ3FtYjE4ZjIifQ.al77WftXFPgUPbZGAs-UqQ';

export default function* mapSaga() {
  yield takeLatest(types.SHOW_LOCATION_START, Location);
}

function* Location(action) {
  // console.log('saga==>', action.payload);
  try {
    const response = yield axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${action.payload.longitude},${action.payload.latitude}.json?access_token=${ACCESS_TOKEN}`,
    );
    // console.log('saga===>', response.data.features[0]);

    yield put({
      type: types.SHOW_LOCATION_SUCCESS,
      payload: response.data.features[0],
    });
  } catch (error) {
    console.log('error => ', error);
    yield put({
      type: types.SHOW_LOCATION_FAIL,
      payload: error,
    });
  }
}

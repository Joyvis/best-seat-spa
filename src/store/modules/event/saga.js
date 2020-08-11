import { call, takeLatest, put } from 'redux-saga/effects';
import {
  GET_LIST_EVENTS, getListEventsSuccess, getListEventsError,
  POST_CREATE_EVENT, getCreateEventSuccess, getCreateEventError
} from './actions';
import { getListEvents, postCreateEvent } from './api';

export function* getListAllEvents(action) {
  try {
    const request = yield call(getListEvents);
    yield put(getListEventsSuccess(request));
  } catch (error) {
    console.error(error);
    yield put(getListEventsError(error));
  }
}


export function* postCreateNewEvent(action) {
  try {
    const request = yield call(postCreateEvent, action.data);
    yield put(getCreateEventSuccess(request));
  } catch (error) {
    console.error(error);
    yield put(getCreateEventError(error));
  }
}

export function* eventsSaga() {
  yield takeLatest(GET_LIST_EVENTS, getListAllEvents);
  yield takeLatest(POST_CREATE_EVENT, postCreateNewEvent);
}

export default eventsSaga;

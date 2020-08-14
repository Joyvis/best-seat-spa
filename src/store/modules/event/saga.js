import { call, takeLatest, put } from 'redux-saga/effects';
import {
  GET_LIST_EVENTS, getListEventsSuccess, getListEventsError,
  GET_EVENT_BY_ID, getEventByIdSuccess, getEventByIdError,
  GET_BEST_SEAT, getBestSeatSuccess, getBestSeatError,
  POST_CREATE_EVENT, getCreateEventSuccess, getCreateEventError,
  POST_CREATE_RESERVATION, getCreateReservationSuccess, getCreateReservationError
} from './actions';
import { getListEventsAPI, postCreateEventAPI, getEventByIdAPI, getBestSeatAPI, postCreateReservationAPI } from './api';

export function* getListAllEvents(action) {
  try {
    const request = yield call(getListEventsAPI);
    yield put(getListEventsSuccess(request));
  } catch (error) {
    console.error(error);
    yield put(getListEventsError(error));
  }
}

export function* getEventById(action) {
  try {
    const request = yield call(getEventByIdAPI, action.eventId);
    yield put(getEventByIdSuccess(request));
  } catch (error) {
    console.error(error);
    yield put(getEventByIdError(error));
  }
}

export function* getBestSeat(action) {
  try {
    const request = yield call(getBestSeatAPI, action.eventId, action.quantity);
    yield put(getBestSeatSuccess(request));
  } catch (error) {
    console.error(error);
    yield put(getBestSeatError(error));
  }
}

export function* postCreateNewEvent(action) {
  try {
    const request = yield call(postCreateEventAPI, action.data);
    yield put(getCreateEventSuccess(request));
  } catch (error) {
    console.error(error);
    yield put(getCreateEventError(error));
  }
}

export function* postCreateReservation(action) {
  try {
    const request = yield call(postCreateReservationAPI, action.data, action.eventId);
    yield put(getCreateReservationSuccess(request));
  } catch (error) {
    console.error(error);
    yield put(getCreateReservationError(error));
  }
}

export function* eventsSaga() {
  yield takeLatest(GET_LIST_EVENTS, getListAllEvents);
  yield takeLatest(GET_EVENT_BY_ID, getEventById);
  yield takeLatest(GET_BEST_SEAT, getBestSeat);
  yield takeLatest(POST_CREATE_EVENT, postCreateNewEvent);
  yield takeLatest(POST_CREATE_RESERVATION, postCreateReservation);
}

export default eventsSaga;

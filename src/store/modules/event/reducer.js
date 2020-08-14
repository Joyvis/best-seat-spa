import events from 'store/modules/event/model'
import {
  GET_LIST_EVENTS,
  GET_LIST_EVENTS_SUCCESS,
  GET_LIST_EVENTS_ERROR,
  GET_EVENT_BY_ID,
  GET_EVENT_BY_ID_SUCCESS,
  GET_EVENT_BY_ID_ERROR,
  GET_BEST_SEAT,
  GET_BEST_SEAT_SUCCESS,
  GET_BEST_SEAT_ERROR,
  POST_CREATE_EVENT,
  GET_CREATE_EVENT_SUCCESS,
  GET_CREATE_EVENT_ERROR,
  POST_CREATE_RESERVATION,
  GET_CREATE_RESERVATION_SUCCESS,
  GET_CREATE_RESERVATION_ERROR,
  SET_CURRENT_EVENT
} from './actions';

const eventReducer = (state = events, action = {}) => {
  switch (action.type) {
    case GET_LIST_EVENTS:
      return { ...state, isFetching: true };
    case GET_LIST_EVENTS_SUCCESS:
      return { ...state, isFetching: false, currentEvents: action.payload.data };
    case GET_LIST_EVENTS_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload.message };
    case GET_EVENT_BY_ID:
      return { ...state, isFetching: true };
    case GET_EVENT_BY_ID_SUCCESS:
      return { ...state, isFetching: false, currentEvent: action.payload.data };
    case GET_EVENT_BY_ID_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload.message };
    case GET_BEST_SEAT:
      return { ...state, isFetching: true };
    case GET_BEST_SEAT_SUCCESS:
      return { ...state, isFetching: false, bestSeats: action.payload.data };
    case GET_BEST_SEAT_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload.message };
    case POST_CREATE_RESERVATION:
      return { ...state, isFetching: true };
    case GET_CREATE_RESERVATION_SUCCESS:
      return { ...state, isFetching: false, bestSeats: action.payload.data };
    case GET_CREATE_RESERVATION_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload.message };
    case POST_CREATE_EVENT:
      return { ...state, isFetching: true };
    case GET_CREATE_EVENT_SUCCESS:
      return { ...state, isFetching: false, bestSeats: action.payload.data };
    case GET_CREATE_EVENT_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload.message };
    case SET_CURRENT_EVENT:
      return { ...state, currentEvent: action }
    default: 
      return state
  }
}

export default eventReducer;

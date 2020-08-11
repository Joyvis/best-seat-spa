import events from 'store/modules/event/model'
import {
  GET_LIST_EVENTS,
  GET_LIST_EVENTS_SUCCESS,
  GET_LIST_EVENTS_ERROR
} from './actions';

const eventReducer = (state = events, action = {}) => {
  switch (action.type) {
    case GET_LIST_EVENTS:
      return { ...state, isFetching: true };
    case GET_LIST_EVENTS_SUCCESS:
      return { ...state, isFetching: false, currentEvents: action.payload.data };
    case GET_LIST_EVENTS_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload.message };
    default: 
      return state
  }
}

export default eventReducer;

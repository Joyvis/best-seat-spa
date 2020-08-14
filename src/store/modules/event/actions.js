export const POST_CREATE_EVENT = 'event/POST_CREATE_EVENT';
export const GET_CREATE_EVENT_SUCCESS = 'event/GET_CREATE_EVENT_SUCCESS';
export const GET_CREATE_EVENT_ERROR = 'event/GET_CREATE_EVENT_ERROR';

export const POST_CREATE_RESERVATION = 'event/POST_CREATE_RESERVATION';
export const GET_CREATE_RESERVATION_SUCCESS = 'event/GET_CREATE_RESERVATION_SUCCESS';
export const GET_CREATE_RESERVATION_ERROR = 'event/GET_CREATE_RESERVATION_ERROR';

export const GET_LIST_EVENTS = 'event/GET_LIST_EVENTS';
export const GET_LIST_EVENTS_SUCCESS = 'event/GET_LIST_EVENTS_SUCCESS';
export const GET_LIST_EVENTS_ERROR = 'event/GET_LIST_EVENTS_ERROR';

export const GET_EVENT_BY_ID = 'event/GET_EVENT_BY_ID';
export const GET_EVENT_BY_ID_SUCCESS = 'event/GET_EVENT_BY_ID_SUCCESS';
export const GET_EVENT_BY_ID_ERROR = 'event/GET_EVENT_BY_ID_ERROR';

export const GET_BEST_SEAT = 'event/GET_BEST_SEAT';
export const GET_BEST_SEAT_SUCCESS = 'event/GET_BEST_SEAT_SUCCESS';
export const GET_BEST_SEAT_ERROR = 'event/GET_BEST_SEAT_ERROR';

export const SET_CURRENT_EVENT = 'event/SET_CURRENT_EVENT'

export const getListEvents = () => ({
  type: GET_LIST_EVENTS
});

export const getListEventsError = payload => ({
  type: GET_LIST_EVENTS_ERROR,
  payload,
});

export const getListEventsSuccess = payload => ({
  type: GET_LIST_EVENTS_SUCCESS,
  payload
});

export const getEventById = eventId => ({
  type: GET_EVENT_BY_ID,
  eventId
});

export const getEventByIdError = payload => ({
  type: GET_EVENT_BY_ID_ERROR,
  payload,
});

export const getEventByIdSuccess = payload => ({
  type: GET_EVENT_BY_ID_SUCCESS,
  payload
});

export const getBestSeat = (eventId, quantity) => ({
  type: GET_BEST_SEAT,
  eventId,
  quantity
});

export const getBestSeatError = payload => ({
  type: GET_BEST_SEAT_ERROR,
  payload,
});

export const getBestSeatSuccess = payload => ({
  type: GET_BEST_SEAT_SUCCESS,
  payload
});

export const postCreateEvent = (data) => ({
  type: POST_CREATE_EVENT,
  data
});

export const getCreateEventSuccess = payload => ({
  type: GET_CREATE_EVENT_SUCCESS,
  payload
});

export const getCreateEventError = payload => ({
  type: GET_CREATE_EVENT_ERROR,
  payload
});

export const postCreateReservation = (data, eventId) => ({
  type: POST_CREATE_RESERVATION,
  data,
  eventId
});

export const getCreateReservationSuccess = payload => ({
  type: GET_CREATE_RESERVATION_SUCCESS,
  payload
});

export const getCreateReservationError = payload => ({
  type: GET_CREATE_RESERVATION_ERROR,
  payload
});

export const setCurrentEvent = event => ({
  type: SET_CURRENT_EVENT,
  event,
});

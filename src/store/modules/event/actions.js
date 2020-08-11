export const POST_CREATE_EVENT = 'event/POST_CREATE_EVENT';
export const GET_CREATE_EVENT_SUCCESS = 'event/GET_CREATE_EVENT_SUCCESS';
export const GET_CREATE_EVENT_ERROR = 'event/GET_CREATE_EVENT_ERROR';

export const GET_LIST_EVENTS = 'event/GET_LIST_EVENTS';
export const GET_LIST_EVENTS_SUCCESS = 'event/GET_LIST_EVENTS_SUCCESS';
export const GET_LIST_EVENTS_ERROR = 'event/GET_LIST_EVENTS_ERROR';

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

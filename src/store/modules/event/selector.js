import { createSelector } from 'reselect';

export const eventsList = state => state.events.currentEvents;
export const getEventsList = createSelector(
  eventsList,
  events => events
);

export const currentEvent = state => state.events.currentEvent;
export const getCurrentEvent = createSelector(
  currentEvent,
  event => event
);

export const bestSeats = state => state.events.bestSeats;
export const getBestSeats = createSelector(
  bestSeats,
  event => event
);

export const eventErrors = state => state.events.errorMessage;
export const getEventErrors = createSelector(
  eventErrors,
  event => event
);

export const reservations = state => state.events.reservations;
export const getReservations = createSelector(
  reservations,
  event => event
);

export const isEventsFetching = state => state;
export const getIsEventsFetching = createSelector(isEventsFetching, isFetching => isFetching);

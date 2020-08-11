import { createSelector } from 'reselect';

export const eventsList = state => state.events;
export const getEventsList = createSelector(
  eventsList,
  events => events
);

export const isEventsFetching = state => state.isFetching;
export const getIsEventsFetching = createSelector(isEventsFetching, isFetching => isFetching);

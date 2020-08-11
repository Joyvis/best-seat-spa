import { createSelector } from 'reselect';

export const eventsList = state => state.events.currentEvents;
export const getEventsList = createSelector(
  eventsList,
  events => events
);

export const isEventsFetching = state => state;
export const getIsEventsFetching = createSelector(isEventsFetching, isFetching => isFetching);

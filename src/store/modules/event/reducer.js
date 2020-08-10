import { createReducer } from '@reduxjs/toolkit';
import {
  postCreateEvent,
  getBestSeat
} from './actions';

const event = createReducer([], {
  [postCreateEvent]: (state, action) => {

  },
  [getBestSeat]: (state, action) => {

  }
});

export default event

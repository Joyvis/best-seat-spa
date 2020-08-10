import bestSeat from '../api/best-seat'
import * as types from '../constants/ActionTypes'

export const getAllEvents = () => dispatch => {
  bestSeat.getEvents(events => {
    dispatch(receiveEvents(events))
  })
}

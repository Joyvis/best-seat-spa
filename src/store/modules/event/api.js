import axios from 'axios';

export const postCreateEventAPI = async (data = {}) => {
  return await axios.post('http://localhost:4000/events', data);
};

export const postCreateReservationAPI = async (data = {}, eventId) => {
  return await axios.post(`http://localhost:4000/events/${eventId}/reservations`, data);
};

export const getBestSeatAPI = async (eventId, seatQuatity = 1) => {
  return await axios.get(`http://localhost:4000/events/${eventId}/best_seats?quantity=${seatQuatity}`);
};

export const getListEventsAPI = async () => {
  return await axios.get('http://localhost:4000/events');
};

export const getEventByIdAPI = async (eventId) => {
  return await axios.get(`http://localhost:4000/events/${eventId}`);
};

import axios from 'axios';

export const postCreateEvent = async (data = {}) => {
  return await axios.post('http://localhost:4000/events', data);
};

export const getBestSeatAPI = async (eventId, seatQuatity) => {
  return await axios.get(`/events/${eventId}/best_seats?quantity=${seatQuatity}`);
};

export const getListEvents = async () => {
  return await axios.get('http://localhost:4000/events');
};

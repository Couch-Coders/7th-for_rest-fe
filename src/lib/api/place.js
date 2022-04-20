import { client } from './clients';

export const getPlace = ({ id }) => {
  return client.get(`/places/${id}`);
};

export const getReview = ({ id }) => {
  return client.get(`/review/${id}`);
};

import { client } from './clients';

export const getPlace = ({ id }) => {
  return client.get(`/places/${id}`);
};

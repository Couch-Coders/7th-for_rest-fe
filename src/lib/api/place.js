import { client } from './clients';

export const getPlace = ({ placeId }) => {
  return client.get(`/places/${placeId}`);
};

export const subscribePlace = ({ placeId }) => {
  return client.get(`/love/${placeId}`);
};

export const checkSubscribe = ({ placeId }) => {
  return client.get(`/love/check/${placeId}`);
};

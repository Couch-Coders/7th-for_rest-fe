import { client } from './clients';

export const getReviews = ({ placeId }) => {
  return client.get(`/reviews/${placeId}/with-place`);
};

export const writeReview = ({ content, placeId, reviewRating, image }) => {
  return client.post('/reviews', { content, placeId, reviewRating, image });
};

export const updateReview = ({
  reviewId,
  content,
  placeId,
  reviewRating,
  image,
}) => {
  return client.patch(`/reviews/${reviewId}`, {
    content,
    placeId,
    reviewRating,
    image,
  });
};

export const removeReview = ({ reviewId }) => {
  return client.delete(`/reviews/${reviewId}`);
};

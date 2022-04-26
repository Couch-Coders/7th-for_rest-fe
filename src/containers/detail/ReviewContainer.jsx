import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ReviewEditor from '../../components/detail/ReviewEditor';
import ReviewList from '../../components/detail/ReviewList';
import { writeReview, updateReview, removeReview } from '../../lib/api/review';

import {
  readReview,
  updateReviewState,
  removeReviewState,
} from './../../modules/detail/reviews';

const ReviewContainer = () => {
  const dispatch = useDispatch();
  const { user, reviews, placeLoading, reviewLoading } = useSelector(
    ({ auth, reviews, loading }) => ({
      user: auth.user,
      reviews: reviews.reviews,
      placeLoading: loading['detail/INFO'],
      reviewLoading: loading['reviews/READ'],
    }),
  );

  const location = useLocation();
  const placeId = location.pathname.replace('/detail/', '');

  useEffect(() => {
    dispatch(readReview({ placeId }));

    return () => {};
  }, [dispatch, placeId]);

  const onPublish = useCallback(
    async ({ reviewId, content, reviewRating, image }) => {
      try {
        if (reviewId) {
          await updateReview({
            reviewId,
            content,
            placeId,
            reviewRating,
            image,
          });
          dispatch(
            updateReviewState({ reviewId, content, reviewRating, image }),
          );
        } else {
          await writeReview({ content, placeId, reviewRating, image });
          dispatch(readReview({ placeId }));
        }
      } catch (e) {
        console.log(e);
      }
    },

    [dispatch, placeId],
  );

  const onRemove = useCallback(
    async ({ reviewId }) => {
      await removeReview({ reviewId });
      dispatch(removeReviewState({ reviewId }));
    },
    [dispatch],
  );

  if (placeLoading) return null;

  return (
    <>
      <ReviewEditor user={user} onPublish={onPublish} />
      <ReviewList
        user={user}
        reviews={reviews}
        onPublish={onPublish}
        onRemove={onRemove}
      />
    </>
  );
};

export default ReviewContainer;

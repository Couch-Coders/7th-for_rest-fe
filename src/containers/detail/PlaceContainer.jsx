import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoadingPage from '../../components/common/LoadingPage';
import PlaceTemplateBlock from '../../components/detail/PlaceTemplate';
import { checkSubscribe, subscribePlace } from '../../lib/api/place';
import { getPlace, updateLikeCount } from './../../modules/detail/place';

const PlaceContainer = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const dispatch = useDispatch();
  const { user, place, reviews, loading } = useSelector(
    ({ auth, place, reviews, loading }) => ({
      user: auth.user,
      place: place.place,
      reviews: reviews.reviews,
      loading: loading['detail/INFO'],
    }),
  );

  const location = useLocation();
  const placeId = location.pathname.replace('/detail/', '');

  const onLikeClick = useCallback(async () => {
    const response = await subscribePlace({ placeId });
    dispatch(updateLikeCount({ likeCount: response.data }));
    setIsSubscribe((cur) => !cur);
  }, [dispatch, placeId]);

  useEffect(() => {
    async function getData() {
      dispatch(getPlace({ placeId }));
      if (user) {
        const response = await checkSubscribe({ placeId });
        const checked = response.data.isLove;
        setIsSubscribe(checked);
      }
    }
    getData();
  }, [dispatch, placeId, user]);

  if (loading) return <LoadingPage />;

  return (
    <>
      <PlaceTemplateBlock
        place={place}
        reviews={reviews}
        user={user}
        isSubscribe={isSubscribe}
        onLikeClick={onLikeClick}
      />
    </>
  );
};

export default PlaceContainer;

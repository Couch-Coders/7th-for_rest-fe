import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PlaceTemplateBlock from '../../components/detail/PlaceTemplate';
import { subscribePlace } from '../../lib/api/place';
import { getLikeCount, getPlace } from './../../modules/detail/place';
import { getPlace as getPlaceAPI } from './../../lib/api/place';

const PlaceContainer = () => {
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

  const onLikeClick = async () => {
    await subscribePlace({ placeId });
    // 별도로 likeCount만 가져오는 api를 구현하지 않아, 전체 값을 가져온후 like카운트만 변경
    dispatch(getLikeCount({ placeId }));
  };

  useEffect(() => {
    dispatch(getPlace({ placeId }));
  }, [dispatch, placeId]);

  if (loading) return null;

  return (
    <>
      <PlaceTemplateBlock
        place={place}
        reviews={reviews}
        user={user}
        onLikeClick={onLikeClick}
      />
    </>
  );
};

export default PlaceContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from '../../components/common/LoadingPage';
import MyPageTemplate from '../../components/myPage/MyPageTemplate';
import { subscribePlace } from '../../lib/api/place';
import Error from '../../components/common/Error';
import {
  getLikePlace,
  removeLikePlace,
} from './../../modules/myPage/likePlace';

const LikePlacesContainer = () => {
  const dispatch = useDispatch();
  const { user, places, loading } = useSelector(
    ({ auth, likePlace, loading }) => ({
      user: auth.user,
      places: likePlace.places,
      loading: loading['myPage/getPlace'],
    }),
  );

  const onLikeClick = async ({ placeId }) => {
    await subscribePlace({ placeId });
    dispatch(removeLikePlace({ placeId }));
  };

  useEffect(() => {
    dispatch(getLikePlace());
  }, [dispatch, user]);

  if (loading) return <LoadingPage />;

  if (!user) return <Error center>{'잘못된 접근입니다'}</Error>;

  if (places.length === 0)
    return <Error center>{'등록된 장소가 없습니다'}</Error>;
  return (
    <>
      <MyPageTemplate
        places={places}
        loading={loading}
        onLikeClick={onLikeClick}
      />
    </>
  );
};

export default LikePlacesContainer;

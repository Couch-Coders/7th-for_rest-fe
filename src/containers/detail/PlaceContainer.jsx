import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DetailTemplate from '../../components/detail/DetailTemplate';
import { getPlace } from './../../modules/detail/place';

const PlaceContainer = () => {
  const dispatch = useDispatch();
  const { place, loading } = useSelector(({ place, loading }) => ({
    place: place.place,
    loading: loading['detail/INFO'],
  }));

  const location = useLocation();
  const id = location.pathname.replace('/detail/', '');

  useEffect(() => {
    dispatch(getPlace({ id }));
  }, [dispatch, id]);

  if (loading) return null;

  return (
    <>
      <DetailTemplate place={place} />
    </>
  );
};

export default PlaceContainer;

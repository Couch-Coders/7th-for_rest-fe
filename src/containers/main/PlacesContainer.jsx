import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaces, placesInitialize } from '../../modules/main/places';
import PlacesTemplate from './../../components/main/places/PlacesTemplate';
import LoadingPage from './../../components/common/LoadingPage';
import Error from '../../components/common/Error';

const PlacesContainer = () => {
  const dispatch = useDispatch();
  const {
    category,
    region_1,
    region_2,
    places,
    totalElements,
    totalPages,
    loading,
  } = useSelector(({ searchParam, places, loading }) => ({
    category: searchParam.category,
    region_1: searchParam.region_1,
    region_2: searchParam.region_2,
    places: places.places,
    totalElements: places.totalElements,
    totalPages: places.totalPages,
    loading: loading['places/SEARCH'],
  }));

  const onSearch = useCallback(
    (page) => {
      if (category !== '' && region_1 !== '' && page !== 0)
        dispatch(getPlaces({ page, category, region_1, region_2 }));
    },
    [dispatch, category, region_1, region_2],
  );

  useEffect(() => {
    return () => {
      dispatch(placesInitialize());
    };
  }, [dispatch]);

  if (loading && places.length === 0) return <LoadingPage />;
  else if (!loading && places.length === 0) {
    return (
      <>
        <Error>{'검색결과가 없습니다.'}</Error>
      </>
    );
  }

  return (
    <>
      <PlacesTemplate
        places={places}
        onSearch={onSearch}
        totalElements={totalElements}
        totalPages={totalPages}
      />
    </>
  );
};

export default PlacesContainer;

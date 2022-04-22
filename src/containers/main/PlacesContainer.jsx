import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotFound from '../../components/main/places/NotFound';
import { getPlaces } from '../../modules/main/places';
import PlacesTemplate from './../../components/main/places/PlacesTemplate';

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
        //검색시에는 0페이지부터 시작
        dispatch(getPlaces({ page, category, region_1, region_2 }));
    },
    [dispatch, category, region_1, region_2],
  );

  if (loading && places.length === 0) return null;
  if (!loading && places.length === 0)
    return (
      <>
        <NotFound />
      </>
    );

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

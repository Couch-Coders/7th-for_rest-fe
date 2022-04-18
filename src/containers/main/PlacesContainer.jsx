import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotFound from '../../components/main/places/NotFound';
import { serach } from '../../modules/main/places';
import PlacesTemplate from './../../components/main/places/PlacesTemplate';

const PlacesContainer = () => {
  const dispatch = useDispatch();
  const { category, region_1, region_2, places, totalPages, loading } =
    useSelector(({ searchParam, places, loading }) => ({
      category: searchParam.category,
      region_1: searchParam.region_1,
      region_2: searchParam.region_2,
      places: places.places,
      totalPages: places.totalPages,
      loading: loading['places/SEARCH'],
    }));

  const onSearch = (page) => {
    if (category !== '' && region_1 !== '' && page !== 0)
      //검색시에는 0페이지부터 시작
      dispatch(serach({ page, category, region_1, region_2 }));
  };

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
        totalPages={totalPages}
      />
    </>
  );
};

export default PlacesContainer;

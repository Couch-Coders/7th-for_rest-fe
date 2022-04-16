import React from 'react';
import { useSelector } from 'react-redux';
import PlacesTemplate from './../../components/main/places/PlacesTemplate';

const PlacesContainer = () => {
  const { places } = useSelector(({ places }) => ({
    places: places.places,
  }));
  return <>{places != null && <PlacesTemplate places={places} />}</>;
};

export default PlacesContainer;

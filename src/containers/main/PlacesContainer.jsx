import React from 'react';
import { useSelector } from 'react-redux';
import PlacesTemplate from './../../components/main/places/PlacesTemplate';

const PlacesContainer = () => {
  const { places } = useSelector(({ places }) => ({
    places: places.places,
  }));
  console.log('호출이 안되나222');
  if (places === null) return null;
  return <>{places != null && <PlacesTemplate places={places} />}</>;
};

export default PlacesContainer;

import React from 'react';
import PlacesTemplate from '../components/main/places/PlacesTemplate';
import SlideTemplate from '../components/main/slide/SlideTemplate';
import HeaderContainer from '../containers/common/HeaderContainer';
import MenuContainer from '../containers/main/MenuContainer';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <SlideTemplate />
      <MenuContainer />
      <PlacesTemplate />
    </>
  );
};

export default MainPage;

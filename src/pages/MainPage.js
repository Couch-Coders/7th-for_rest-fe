import React from 'react';
import SlideTemplate from '../components/main/slide/SlideTemplate';
import HeaderContainer from '../containers/common/HeaderContainer';
import MenuContainer from '../containers/main/MenuContainer';
import PlacesContainer from '../containers/main/PlacesContainer';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <SlideTemplate />
      <MenuContainer />
      <PlacesContainer />
    </>
  );
};

export default MainPage;

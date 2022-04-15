import React from 'react';
import SlideTemplate from '../components/main/slide/SlideTemplate';
import HeaderContainer from '../containers/common/HeaderContainer';
import MenuContainer from '../containers/main/MenuContainer';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <SlideTemplate />
      <MenuContainer />
    </>
  );
};

export default MainPage;

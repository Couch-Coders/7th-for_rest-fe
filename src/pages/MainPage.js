import React from 'react';
import SlideTemplate from '../components/main/slide/SlideTemplate';
import HeaderContainer from '../containers/common/HeaderContainer';
import CategoryMenu from '../containers/main/CategoryMenu';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <SlideTemplate />
      <CategoryMenu />
    </>
  );
};

export default MainPage;

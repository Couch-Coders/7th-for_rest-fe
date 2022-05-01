import React from 'react';
import { Outlet } from 'react-router-dom';
import SlideTemplate from '../components/main/slide/SlideTemplate';

import MenuContainer from '../containers/main/MenuContainer';

const MainPage = () => {
  return (
    <>
      <SlideTemplate />
      <MenuContainer />
      <Outlet />
    </>
  );
};

export default MainPage;

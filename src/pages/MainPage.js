import React from "react";
import SlideTemplate from "../components/main/slide/SlideTemplate";
import MenuTemplate from "../components/main/categoryMenu/MenuTemplate";
import HeaderContainer from "../containers/common/HeaderContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <SlideTemplate />
      <MenuTemplate />
    </>
  );
};

export default MainPage;

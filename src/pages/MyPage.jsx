import React from 'react';
import { Helmet } from 'react-helmet-async';
import LikePlacesContainer from '../containers/myPage/LikePlacesContainer';

const MyPage = () => {
  return (
    <>
      <Helmet>
        <title>마이 페이지</title>
      </Helmet>
      <LikePlacesContainer />
    </>
  );
};

export default MyPage;

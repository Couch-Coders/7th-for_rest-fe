import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlaceContainer from '../containers/detail/PlaceContainer';
import ReviewContainer from '../containers/detail/ReviewContainer';

const DetailPage = () => {
  return (
    <>
      <Helmet>
        <title>상세 정보</title>
      </Helmet>
      <PlaceContainer />
      <ReviewContainer />
    </>
  );
};

export default DetailPage;

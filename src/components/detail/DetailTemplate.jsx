import React, { useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

import { KakaoMapScript } from '../../lib/kakaoMap';
import PlaceInfo from './PlaceInfo';
import ReviewList from './ReviewList';
import ReviewEditor from './ReviewEditor';

const DetailTemplateBlock = styled(Responsive)`
  margin-top: 5vh;
`;

const DetailTemplate = ({ place }) => {
  console.log(place);

  useEffect(() => {
    KakaoMapScript(place.address);
  }, [place]);

  return (
    <DetailTemplateBlock>
      <PlaceInfo place={place} />

      <ReviewEditor />
      <ReviewList />
    </DetailTemplateBlock>
  );
};

export default DetailTemplate;

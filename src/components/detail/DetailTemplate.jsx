import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import PlaceInfo from './PlaceInfo';
import ReviewEditor from './ReviewEditor';
import ReviewList from './ReviewList';

const DetailTemplateBlock = styled(Responsive)`
  margin-top: 5vh;
`;

const Spacer = styled.div`
  height: 5rem;
`;

const DetailTemplate = ({ place }) => {
  return (
    <DetailTemplateBlock>
      <PlaceInfo place={place} />

      <ReviewEditor />
      <ReviewList />
      <Spacer />
    </DetailTemplateBlock>
  );
};

export default DetailTemplate;

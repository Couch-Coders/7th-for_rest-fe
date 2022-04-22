import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import PlaceInfo from './PlaceInfo';
import PlaceTitle from './PlaceTitle';

const DetailTemplateBlock = styled(Responsive)`
  margin-top: 5vh;
`;

const DetailTemplate = ({ place, user }) => {
  return (
    <DetailTemplateBlock>
      <PlaceTitle place={place} />
      <PlaceInfo place={place} />
    </DetailTemplateBlock>
  );
};

export default DetailTemplate;

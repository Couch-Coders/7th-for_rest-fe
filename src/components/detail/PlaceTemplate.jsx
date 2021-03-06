import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import PlaceInfo from './PlaceInfo';
import PlaceTitle from './PlaceTitle';

const PlaceTemplateBlock = styled(Responsive)`
  margin-top: 5vh;
`;

const PlaceTemplate = ({ place, reviews, user, onLikeClick, isSubscribe }) => {
  return (
    <PlaceTemplateBlock>
      <PlaceTitle
        place={place}
        reviews={reviews}
        user={user}
        isSubscribe={isSubscribe}
        onLikeClick={onLikeClick}
      />
      <PlaceInfo place={place} />
    </PlaceTemplateBlock>
  );
};

export default PlaceTemplate;

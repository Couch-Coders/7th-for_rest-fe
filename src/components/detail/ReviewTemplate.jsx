import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import PlaceInfo from './PlaceInfo';
import PlaceTitle from './PlaceTitle';
import ReviewEditor from './ReviewEditor';
import ReviewList from './ReviewList';

const ReviewTemplateBlock = styled(Responsive)`
  margin-top: 10vh;
`;



const ReviewTemplate = ({ user }) => {
  return (
    <ReviewTemplateBlock>

      <Spacer />
    </ReviewTemplateBlock>
  );
};

export default ReviewTemplate;

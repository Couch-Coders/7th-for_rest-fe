import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const ReviewTemplateBlock = styled(Responsive)`
  margin-top: 10vh;
`;

const ReviewTemplate = ({ user }) => {
  return <ReviewTemplateBlock></ReviewTemplateBlock>;
};

export default ReviewTemplate;

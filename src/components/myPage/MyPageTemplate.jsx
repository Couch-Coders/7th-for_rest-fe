import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import CategoryTemplate from './CategoryTemplate';
import LikePlace from './LikePlace';

const MyPageTemplateBlock = styled(Responsive)`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
`;

const MyPageTemplate = () => {
  return (
    <MyPageTemplateBlock>
      <LikePlace />
      <CategoryTemplate />
    </MyPageTemplateBlock>
  );
};

export default MyPageTemplate;

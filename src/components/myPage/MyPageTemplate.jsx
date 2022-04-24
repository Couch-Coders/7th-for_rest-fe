import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import LikeCategory from './LikeCategory';
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
      <LikeCategory />
    </MyPageTemplateBlock>
  );
};

export default MyPageTemplate;

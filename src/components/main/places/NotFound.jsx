import React from 'react';
import styled from 'styled-components';
import Responsive from './../../common/Responsive';

const NotFoundBlock = styled(Responsive)`
  display: flex;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <NotFoundBlock>
      <h2>검색결과가 없습니다.</h2>
    </NotFoundBlock>
  );
};

export default NotFound;

import React from 'react';
import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';
const LoadingPageBlock = styled.div`
  width: 50%;
  height: 50%;
  left: 25%;
  top: 25%;
  position: fixed;
  opacity: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const LoadingPage = () => {
  return (
    <LoadingPageBlock>
      <LoadingOutlined style={{ fontSize: '150px' }} />;
    </LoadingPageBlock>
  );
};

export default LoadingPage;

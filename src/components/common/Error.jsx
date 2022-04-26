import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from './Responsive';

const NotFoundBlock = styled(Responsive)`
  display: flex;
  justify-content: center;
  ${(props) =>
    props.center &&
    css`
      position: relative;
      top: 45vh;
    `}
  ${(props) =>
    props.noSearch &&
    css`
      flex-basis: 65%;
      margin-top: 59.5px;
    `}
`;

const ErrorPage = ({ children, center, noSearch }) => {
  return (
    <NotFoundBlock center={center} noSearch={noSearch}>
      <h2>{children}</h2>
    </NotFoundBlock>
  );
};

export default ErrorPage;

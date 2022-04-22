import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const SpacerBlock = styled(Responsive)`
  height: 5rem;
`;

const Spacer = ({ children, ...rest }) => {
  return <SpacerBlock {...rest}>{children}</SpacerBlock>;
};

export default Spacer;

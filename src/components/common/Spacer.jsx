import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const SpacerBlock = styled(Responsive)`
  height: 5rem;
`;

const Spacer = () => {
  return <SpacerBlock />;
};

export default Spacer;

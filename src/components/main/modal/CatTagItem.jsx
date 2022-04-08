import React from 'react';
import styled, { css } from 'styled-components';

const CatTagItemBlock = styled.div`
  border-radius: 2rem;
  width: 7rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  background: #efefef;
  margin-top: 1rem;
  font-size: 1rem;
  margin-left: 2rem;
  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.picked &&
    css`
      background: #12483aa1;
      color: white;
    `}
`;

const CatTagItem = ({ children, item, onClick, picked }) => {
  const onClickInItem = () => {
    onClick({ category: item });
  };

  return (
    <CatTagItemBlock onClick={onClickInItem} picked={picked}>
      {children ? children : item}
    </CatTagItemBlock>
  );
};

export default CatTagItem;

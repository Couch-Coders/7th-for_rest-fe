import React, { useCallback } from 'react';
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
    props.checked &&
    css`
      background: #12483aa1;
      color: white;
    `}
`;

const CatTagItem = ({ children, category, onClick, checked }) => {
  const onClickInItem = useCallback(() => {
    onClick({ category: category });
  }, [category, onClick]);

  return (
    <CatTagItemBlock onClick={onClickInItem} checked={checked}>
      {children ? children : category}
    </CatTagItemBlock>
  );
};

export default React.memo(CatTagItem);

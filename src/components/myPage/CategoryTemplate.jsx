import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'antd';

const CategoryTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  height: 35rem;
  margin-right: 8rem;
  width: 20rem;
`;

const ThemeBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CustomButton = styled(Button)`
  width: 76px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-left: 1rem;
  }

  :focus {
    color: rgba(0, 0, 0, 0.85);
    border-color: #d9d9d9;
  }
  ${(props) =>
    props.checked &&
    css`
      color: #40a9ff;
      border-color: #40a9ff;
      background: white;
      :focus {
        color: #40a9ff;
        border-color: #40a9ff;
      }
    `}
`;

const CategoryTemplate = () => {
  return (
    <CategoryTemplateBlock>
      <ThemeBlock>
        <h3>지역 선택</h3>
        <CustomButton shape={'round'}>서울</CustomButton>
        <CustomButton shape={'round'}>서울</CustomButton>
        <CustomButton shape={'round'}>서울</CustomButton>
        <CustomButton shape={'round'}>서울</CustomButton>
      </ThemeBlock>
    </CategoryTemplateBlock>
  );
};

export default CategoryTemplate;

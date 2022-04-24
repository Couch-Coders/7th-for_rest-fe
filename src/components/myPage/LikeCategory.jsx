import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'antd';

const CategoryTemplateBlock = styled.div`
  margin-top: 43.5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  background: whitesmoke;
  max-width: 18rem;

  height: 100%;
`;

const ThemeBlock = styled.div`
  & + & {
    margin-top: 3rem;
  }
  display: flex;
  flex-direction: column;

  h3 {
    border-bottom: 1px solid gray;
  }

  .buttonGroup {
    display: flex;
    flex-wrap: wrap;
  }
`;

const CustomButton = styled(Button)`
  margin-top: 1rem;
  display: flex;
  margin-left: 0.5rem;
  justify-content: center;
  width: 76px;
  height: 32px;
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
        <h3>카테고리 선택</h3>
        <div className="buttonGroup">
          <CustomButton shape={'round'}>서에울</CustomButton>
          <CustomButton shape={'round'}>서울오</CustomButton>
          <CustomButton shape={'round'}>서울</CustomButton>
          <CustomButton shape={'round'}>서울</CustomButton>
          <CustomButton shape={'round'}>서울오</CustomButton>
          <CustomButton shape={'round'}>서울</CustomButton>
          <CustomButton shape={'round'}>서울</CustomButton>
          <CustomButton shape={'round'}>서울오</CustomButton>
          <CustomButton shape={'round'}>서울</CustomButton>
          <CustomButton shape={'round'}>서울</CustomButton>
        </div>
      </ThemeBlock>
      <ThemeBlock>
        <h3>지역 선택</h3>
        <div className="buttonGroup">
          <CustomButton shape={'round'}>서에울</CustomButton>
          <CustomButton shape={'round'}>서울오</CustomButton>
          <CustomButton shape={'round'}>서울</CustomButton>
          <CustomButton shape={'round'}>서울</CustomButton>
        </div>
      </ThemeBlock>
    </CategoryTemplateBlock>
  );
};

export default CategoryTemplate;

import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'antd';

const LikeTagCheckBoxBlock = styled.div`
  margin-top: 59.5px;
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

const LikeTagCheckBox = ({ places, selectedTag, onClick }) => {
  const categorys = places
    ? [...new Set(places.map((item) => item.category))]
    : [];
  const regions = places
    ? [...new Set(places.map((item) => item.region_1))]
    : [];

  const categorysRender = () => {
    if (!categorys) return;
    const categorysItem = [];
    categorysItem.push(
      selectedTag.categorys.length ? (
        <CustomButton
          shape={'round'}
          key="cat_all"
          onClick={() => onClick({ categorys: '' })}
        >
          전체
        </CustomButton>
      ) : (
        <CustomButton
          shape={'round'}
          key="cat_all"
          checked
          onClick={() => onClick({ categorys: '' })}
        >
          전체
        </CustomButton>
      ),
    );
    categorys.forEach((item, idx) => {
      categorysItem.push(
        selectedTag.categorys.includes(item) ? (
          <CustomButton
            shape={'round'}
            key={idx}
            checked
            onClick={() => onClick({ categorys: item })}
          >
            {item}
          </CustomButton>
        ) : (
          <CustomButton
            shape={'round'}
            key={idx}
            onClick={() => onClick({ categorys: item })}
          >
            {item}
          </CustomButton>
        ),
      );
    });

    return categorysItem;
  };

  const regionsRender = () => {
    if (!regions) return;
    const regionsItem = [];
    regionsItem.push(
      selectedTag.regions.length ? (
        <CustomButton
          shape={'round'}
          key="reg_all"
          onClick={() => onClick({ regions: '' })}
        >
          전체
        </CustomButton>
      ) : (
        <CustomButton
          shape={'round'}
          key="reg_all"
          checked
          onClick={() => onClick({ regions: '' })}
        >
          전체
        </CustomButton>
      ),
    );
    regions.forEach((item, idx) => {
      regionsItem.push(
        selectedTag.regions.includes(item) ? (
          <CustomButton
            shape={'round'}
            key={'reg_' + idx}
            checked
            onClick={() => onClick({ regions: item })}
          >
            {item}
          </CustomButton>
        ) : (
          <CustomButton
            shape={'round'}
            key={'reg_' + idx}
            onClick={() => onClick({ regions: item })}
          >
            {item}
          </CustomButton>
        ),
      );
    });
    return regionsItem;
  };

  return (
    <LikeTagCheckBoxBlock>
      <ThemeBlock key="cat_blogck">
        <h3>카테고리 선택</h3>
        <div className="buttonGroup">{categorysRender()}</div>
      </ThemeBlock>
      <ThemeBlock key="reg_blogck">
        <h3>지역 선택</h3>
        <div className="buttonGroup">{regionsRender()}</div>
      </ThemeBlock>
    </LikeTagCheckBoxBlock>
  );
};

export default LikeTagCheckBox;

import React from 'react';
import styled from 'styled-components';
import Responsive from './../../common/Responsive';
import { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { PlusCircleOutlined } from '@ant-design/icons';

const MenuTemplateWrapper = styled(Responsive)`
  margin-top: 8vh;
`;
const MenuTemplateBlock = styled.div`
  & + & {
    margin-top: 3vh;
  }
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryItemBlock = styled.div`
  border: 3px solid #8f1919;
  width: 200px;
  height: 200px;
  margin-top: 1.5rem;
  border-radius: 0.75rem;
  margin-left: 3rem;
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menuTitle {
    padding-left: calc((100% - 920px) / 2);
    font-weight: 500;
    font-size: 1.5rem;
  }

  .moreMenu {
    padding-right: calc((100% - 960px) / 2);
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

const MenuTemplate = () => {
  const [second, setSecond] = useState({
    category: '',
    region_1: '',
    region_2: '',
  });
  const [first, setfirst] = useState(false);

  return (
    <MenuTemplateWrapper>
      <TextBlock>
        <div className="menuTitle">
          <HiLocationMarker size={30} />
          추천 카테고리
        </div>
        <div className="moreMenu">
          <PlusCircleOutlined size={30} />더 보기
        </div>
      </TextBlock>
      <MenuTemplateBlock>
        <CategoryItemBlock>1</CategoryItemBlock>
        <CategoryItemBlock>2</CategoryItemBlock>
        <CategoryItemBlock>3</CategoryItemBlock>
        <CategoryItemBlock>4</CategoryItemBlock>
      </MenuTemplateBlock>
      <MenuTemplateBlock>
        <CategoryItemBlock>5</CategoryItemBlock>
        <CategoryItemBlock>6</CategoryItemBlock>
        <CategoryItemBlock>7</CategoryItemBlock>
        <CategoryItemBlock>8</CategoryItemBlock>
      </MenuTemplateBlock>
    </MenuTemplateWrapper>
  );
};

export default MenuTemplate;

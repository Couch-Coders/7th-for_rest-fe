import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { PlusCircleOutlined } from '@ant-design/icons';
import TagModal from '../modal/CatTagModal';

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
  img {
    object-fit: cover;
    opacity: 0.4;
  }
  h2 {
    margin: 0 auto;
  }
  :hover {
    cursor: pointer;
  }
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menuTitle {
    margin-left: calc((100% - 920px) / 2);
    font-weight: 500;
    font-size: 1.5rem;
  }

  .moreCat {
    margin-right: calc((100% - 950px) / 2);
    font-weight: 500;
    font-size: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }
`;

const MenuTemplate = () => {
  const [searchType, setSearchType] = useState({
    category: '',
    region_1: '',
    region_2: '',
  });

  const [catModal, setCatModal] = useState(false);
  const [regionModal, setRegionModal] = useState(false);

  const onClickMoreCat = () => {
    setCatModal(true);
  };

  const onClickCat = ({ category }) => {
    setSearchType({
      ...searchType,
      category,
    });
  };

  const onCancelInMoreCat = () => {
    setCatModal(false);
  };

  return (
    <>
      <MenuTemplateWrapper>
        <TextBlock>
          <h4 className="menuTitle">
            <HiLocationMarker size={30} /> 추천 장소
          </h4>

          <h4 className="moreCat" onClick={onClickMoreCat}>
            <PlusCircleOutlined size={30} /> 더 보기
          </h4>
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
      <TagModal
        category={searchType.category}
        visible={catModal}
        onClick={onClickCat}
        onCancel={onCancelInMoreCat}
        title={'category'}
      />
    </>
  );
};

export default MenuTemplate;

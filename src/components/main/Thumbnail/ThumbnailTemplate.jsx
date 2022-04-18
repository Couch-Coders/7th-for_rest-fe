import React from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import { HiLocationMarker } from 'react-icons/hi';
import { PlusCircleOutlined } from '@ant-design/icons';
import mainInfoData from '../../../assets/mainInfoData.json';
import ThumbnailItem from './ThumbnailItem';

const ThumbnailTemplateWrapper = styled(Responsive)`
  margin-top: 8vh;
`;
const ThumbnailTemplateBlock = styled.div`
  & + & {
    margin-top: 3vh;
  }
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menuTitle {
    margin-left: calc((100% - 935px) / 2);
    font-weight: 500;
    font-size: 1.5rem;
    border-bottom: 3px solid gray;
  }

  .moreCat {
    margin-right: calc((100% - 930px) / 2);
    font-weight: 500;
    font-size: 1.5rem;

    :hover {
      cursor: pointer;
    }
  }
`;
const Spacer = styled.div`
  height: 3rem;
`;

const ThumbnailTemplate = ({
  onChangeSearchParam,
  onReset,
  onToggleCat,
  onToggleReg,
}) => {
  // <MenuItem>를 4개씩 나눠서 저장
  function render() {
    let itemCount = 1;
    const result = [];
    let temp = [];
    for (const key in mainInfoData.mainCategory) {
      temp.push(
        <ThumbnailItem
          item={mainInfoData.mainCategory[key]}
          onClick={onClickThumbnail}
          key={itemCount}
        />,
      );
      if (itemCount % 4 === 0) {
        result.push(
          <ThumbnailTemplateBlock key={itemCount}>
            {temp}
          </ThumbnailTemplateBlock>,
        );
        temp = [];
      }
      itemCount += 1;
    }
    return result;
  }

  const onClickThumbnail = ({ category }) => {
    onReset();
    onChangeSearchParam({ category });
    onToggleReg();
  };

  const onClickMoreCat = () => {
    onToggleCat();
  };

  return (
    <>
      <ThumbnailTemplateWrapper>
        <TextBlock>
          <h4 className="menuTitle">
            <HiLocationMarker size={30} /> 추천 장소
          </h4>

          <h4 className="moreCat" onClick={onClickMoreCat}>
            <PlusCircleOutlined /> 더 보기
          </h4>
        </TextBlock>
        {render()}
      </ThumbnailTemplateWrapper>
      <Spacer />
    </>
  );
};

export default ThumbnailTemplate;

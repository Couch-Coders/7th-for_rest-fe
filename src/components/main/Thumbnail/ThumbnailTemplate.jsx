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
    margin-left: calc((100% - 890px) / 2);
    font-weight: 500;
    font-size: 1.5rem;
    border-bottom: 3px solid gray;
  }

  .moreCat {
    margin-right: calc((100% - 970px) / 2);
    font-weight: 500;
    font-size: 1.5rem;

    :hover {
      cursor: pointer;
    }
  }
`;

const ThumbnailTemplate = ({ onClick, onToggleCat, onToggleReg }) => {
  // <MenuItem>를 4개씩 나눠서 저장
  function render() {
    let itemCount = 0;
    const result = [];
    const result_2 = [];
    for (const key in mainInfoData.mainCategory) {
      if (itemCount < 4)
        result.push(
          <ThumbnailItem
            item={mainInfoData.mainCategory[key]}
            onClick={onClickThumbnail}
            key={itemCount}
          />,
        );
      else
        result_2.push(
          <ThumbnailItem
            item={mainInfoData.mainCategory[key]}
            onClick={onClickThumbnail}
            key={itemCount}
          />,
        );
      itemCount += 1;
    }

    return [result, result_2];
  }
  const onClickThumbnail = ({ category }) => {
    onClick({ category });
    onToggleReg();
  };

  const onClickMoreCat = () => {
    onToggleCat();
  };

  const [result, result_2] = render();

  return (
    <>
      <ThumbnailTemplateWrapper>
        <TextBlock>
          <h4 className="menuTitle">
            <HiLocationMarker size={30} /> 추천 장소
          </h4>

          <h4 className="moreCat" onClick={onClickMoreCat}>
            <PlusCircleOutlined size={30} /> 더 보기
          </h4>
        </TextBlock>

        <ThumbnailTemplateBlock>{result}</ThumbnailTemplateBlock>
        <ThumbnailTemplateBlock>{result_2}</ThumbnailTemplateBlock>
      </ThumbnailTemplateWrapper>
    </>
  );
};

export default ThumbnailTemplate;

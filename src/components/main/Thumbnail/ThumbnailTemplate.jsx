import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import { HiLocationMarker } from 'react-icons/hi';
import mainInfoData from '../../../assets/mainInfoData.json';
import ThumbnailItem from './ThumbnailItem';

const ThumbnailTemplateWrapper = styled(Responsive)`
  margin-top: 8vh;
`;
const ThumbnailTemplateBlock = styled.div`
  & + & {
    margin-top: 3vh;
  }
  > :last-child {
    margin-right: 3rem;
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
  const onClickThumbnail = useCallback(
    ({ category }) => {
      onReset();
      onChangeSearchParam({ category });
      onToggleReg();
    },
    [onChangeSearchParam, onReset, onToggleReg],
  );

  const onClickMoreCat = useCallback(() => {
    onToggleCat();
  }, [onToggleCat]);

  // <MenuItem>를 4개씩 나눠서 저장
  const thumbnailRender = useCallback(() => {
    let itemCount = 1;
    const result = [];
    let temp = [];
    for (const key in mainInfoData.mainCategory) {
      temp.push(
        <ThumbnailItem
          ThumbItem={mainInfoData.mainCategory[key]}
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
  }, [onClickThumbnail]);

  const Thumbnail = useMemo(() => thumbnailRender(), [thumbnailRender]);

  return (
    <>
      <ThumbnailTemplateWrapper>
        <TextBlock>
          <h4 className="menuTitle">
            <HiLocationMarker size={30} /> 추천 장소
          </h4>

          <h4 className="moreCat" onClick={onClickMoreCat}>
            더 보기
          </h4>
        </TextBlock>
        {Thumbnail}
      </ThumbnailTemplateWrapper>
      <Spacer />
    </>
  );
};

export default React.memo(ThumbnailTemplate);

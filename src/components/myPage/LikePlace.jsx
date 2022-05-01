import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';
import PlaceItem from './PlaceItem';

const LikePlaceBlock = styled.div`
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
  .pagenation {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;
const VIEW_ITEM = 4;

const LikePlace = ({ sortedPlaces, onLikeClick }) => {
  const [pageInex, setPageInex] = useState(1);

  const totalPlaces = sortedPlaces.length;

  useEffect(() => {
    setPageInex(1);
  }, [sortedPlaces]);

  const onPageChange = useCallback((e) => {
    setPageInex(e);
  }, []);

  const render = useCallback(() => {
    const result = [];
    sortedPlaces.map((place, idx) => {
      //해당 페이지(index)에 속하는 아이템만 컴포넌트를 보이게 생성
      if ((pageInex - 1) * VIEW_ITEM <= idx && idx < pageInex * VIEW_ITEM)
        return result.push(
          <PlaceItem place={place} key={idx} onLikeClick={onLikeClick} />,
        );
      //페이지에 해당 되지 않을때는 숨김
      else
        return result.push(
          <PlaceItem
            place={place}
            key={idx}
            hidden
            onLikeClick={onLikeClick}
          />,
        );
    });
    return result;
  }, [onLikeClick, pageInex, sortedPlaces]);

  return (
    <LikePlaceBlock>
      <h2>총 {totalPlaces}곳의 즐겨찾기 장소</h2>

      {render()}
      {totalPlaces ? (
        <div className="pagenation">
          <Pagination
            simple
            defaultCurrent={1}
            current={pageInex}
            defaultPageSize={4}
            total={totalPlaces}
            onChange={(e) => onPageChange(e)}
          />
        </div>
      ) : (
        ''
      )}
    </LikePlaceBlock>
  );
};

export default React.memo(LikePlace);

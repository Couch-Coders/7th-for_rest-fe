import React, { useState } from 'react';
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

  const onPageChange = (e) => {
    setPageInex(e);
  };

  const render = () => {
    const result = [];
    sortedPlaces.map((place, idx) => {
      if ((pageInex - 1) * VIEW_ITEM <= idx && idx < pageInex * VIEW_ITEM)
        return result.push(
          <PlaceItem place={place} key={idx} onLikeClick={onLikeClick} />,
        );
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
  };

  return (
    <LikePlaceBlock>
      <h2>총 {totalPlaces}곳의 즐겨찾기 장소</h2>

      {render()}
      {totalPlaces ? (
        <div className="pagenation">
          <Pagination
            simple
            defaultCurrent={1}
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

export default LikePlace;

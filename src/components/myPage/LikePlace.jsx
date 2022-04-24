import React from 'react';
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

const LikePlace = () => {
  return (
    <LikePlaceBlock>
      <h2>총 x개의 즐겨찾기 장소</h2>

      <PlaceItem></PlaceItem>

      <PlaceItem></PlaceItem>

      <PlaceItem></PlaceItem>

      <PlaceItem></PlaceItem>
      <div className="pagenation">
        <Pagination
          simple
          defaultCurrent={1}
          total={20}
          onChange={(e) => console.log(e)}
        />
      </div>
    </LikePlaceBlock>
  );
};

export default LikePlace;

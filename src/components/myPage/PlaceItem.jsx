import React from 'react';
import styled from 'styled-components';
import { HeartFilled, CommentOutlined, StarFilled } from '@ant-design/icons';

const PlaceItemBlock = styled.div`
  & + & {
    margin-top: 1rem;
  }
  width: 100%;

  min-height: 11rem;
  background: whitesmoke;
  display: flex;
  align-items: center;
  img {
    object-fit: cover;
    border-radius: 1rem;
    margin-left: 1rem;
    background: black;
    width: 55%;
    max-width: 18rem;

    max-height: 12rem;
    height: 80%;
  }
  .textBlock {
    margin-left: 3rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 80%;
    width: 40%;
    div {
      word-break: break-all;
    }
    .title.info {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const PlaceItem = () => {
  return (
    <PlaceItemBlock>
      <img alt=""></img>
      <div className="textBlock">
        <div className="title info">
          <h3>title</h3>
          <div>
            <HeartFilled
              style={{
                color: '#eb2f96',
                cursor: 'pointer',
              }}
            />
            0
            <StarFilled style={{ fontSize: '20px', color: '#fadb14' }} />0
            <CommentOutlined style={{ fontSize: '20px' }} />0
          </div>
        </div>
        <div>주소 : dddd</div>
      </div>
    </PlaceItemBlock>
  );
};

export default PlaceItem;

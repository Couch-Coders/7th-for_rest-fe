import React from 'react';
import styled, { css } from 'styled-components';
import {
  ExclamationCircleOutlined,
  HeartFilled,
  CommentOutlined,
  StarFilled,
} from '@ant-design/icons';
import { Modal } from 'antd';
const PlaceItemBlock = styled.div`
  margin-top: 1rem;

  width: 100%;
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}

  min-height: 12rem;
  border: 2px solid whitesmoke;
  border-radius: 0.5rem;
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
    padding-top: 2%;
    height: 100%;
    width: 45%;
    div {
      word-break: break-all;
    }
    .title-info {
      display: flex;
      justify-content: space-between;
    }
    .place-info {
      margin-top: 0.25rem;
    }
  }
`;

const PlaceItem = ({ place, hidden, onLikeClick }) => {
  const img_url = place.img_src
    ? place.img_src
    : require('../../assets/noImg.png');

  const confirmModal = (placeId) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '좋아요를 취소하시겠습니까',
      cancelText: '취소',
      okText: '확인',
      centered: true,
      onOk() {
        onLikeClick({ placeId: placeId });
      },
      onCancel() {},
    });
  };

  return (
    <PlaceItemBlock hidden={hidden}>
      <img alt={place.name} src={img_url}></img>

      <div className="textBlock">
        <div className="title-info">
          <a href={`/#/detail/${place.id}`}>
            <h2>{place.name}</h2>
          </a>
          <div>
            <HeartFilled
              style={{
                fontSize: '20px',
                color: '#eb2f96',
                cursor: 'pointer',
              }}
              onClick={() => confirmModal(place.id)}
            />
            {place.like_count}
            <StarFilled style={{ fontSize: '20px', color: '#fadb14' }} />
            {place.avg}
            <CommentOutlined style={{ fontSize: '20px' }} />
            {place.review_count}
          </div>
        </div>
        <div className="place-info">
          <strong>주소</strong> : {place.address}
        </div>
        {place.phone ? (
          <div className="place-info">
            <strong>연락처</strong> : {place.phone}
          </div>
        ) : (
          ''
        )}
        {place.tag ? (
          <div className="place-info">
            <strong>태그</strong> : {place.tag}
          </div>
        ) : (
          ''
        )}
      </div>
    </PlaceItemBlock>
  );
};

export default PlaceItem;

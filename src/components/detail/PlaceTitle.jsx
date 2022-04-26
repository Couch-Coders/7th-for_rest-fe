import React from 'react';
import styled from 'styled-components';
import {
  HeartFilled,
  HeartTwoTone,
  CommentOutlined,
  StarFilled,
} from '@ant-design/icons';

const PlaceTitleBlock = styled.div`
  height: 400px;

display: flex;
justify-content: space-between;
align-items: center;
.contentBlock {
  display:flex;
  align-items:center;
  justify-content: space-between;
  img {
    object-fit: fill;
    width: 480px;
    height: 320px;
    margin-left: 5rem;
    border-radius:1rem;
  }
  .textBlock{
    display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;

  height:300px;
    width:500px;
    h1{

  }
  .tagInfo{
    flex-wrap:wrap;
    width:250px;
    
  }
  .additionGroup{
    .group{
      margin-left:0.5rem
    }
    display:flex;
    flex-direction:row;
    margin-top:2rem;
  }
  }
}
}`;

const PlaceTitle = ({ place, reviews, user, onLikeClick, isSubscribe }) => {
  const avgRating = () => {
    if (reviews.length === 0) return 0;
    return (
      reviews.reduce((acc, cur) => {
        return (acc += parseFloat(cur.reviewRating));
      }, 0) / reviews.length
    );
  };

  const onLike = async () => {
    if (!user) {
      alert('로그인 후 좋아요 기능 이용 가능합니다.');
      return null;
    }
    await onLikeClick();
  };

  const img_url = place.img_src
    ? place.img_src
    : require('../../assets/noImg.png');
  return (
    <PlaceTitleBlock>
      <div className="contentBlock">
        <img alt="" src={img_url} />
        <div className="textBlock">
          <h1>{place.name}</h1>
          <div className="tagInfo">
            <h3>{place.tag}</h3>
          </div>
          <div className="additionGroup">
            <div className="group">
              {JSON.parse(isSubscribe) ? (
                <HeartFilled
                  onClick={onLike}
                  style={{
                    color: '#eb2f96',
                    fontSize: '25px',
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <HeartTwoTone
                  twoToneColor="#eb2f96"
                  onClick={onLike}
                  style={{ fontSize: '25px', cursor: 'pointer' }}
                />
              )}

              <span>{place.likeCount}</span>
            </div>

            <div className="group">
              <StarFilled style={{ fontSize: '25px', color: '#fadb14' }} />
              <span>{avgRating().toString().substr(0, 3)}</span>
            </div>
            <div className="group">
              <CommentOutlined style={{ fontSize: '25px' }} />
              <span>{reviews.length}</span>
            </div>
          </div>
        </div>
      </div>
    </PlaceTitleBlock>
  );
};

export default PlaceTitle;

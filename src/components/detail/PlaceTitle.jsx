import React from 'react';
import styled from 'styled-components';
import { HeartTwoTone } from '@ant-design/icons';
import { defaultHeaders } from '../common/AuthForm';

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
    object-fit: cover;
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

const PlaceTitle = ({ place }) => {
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
              <HeartTwoTone
                twoToneColor="#eb2f96"
                style={{ fontSize: '20px' }}
              />
              <span>{place.likeCount}</span>
            </div>
            <div className="group">
              <HeartTwoTone
                twoToneColor="#eb2f96"
                style={{ fontSize: '20px' }}
              />
              <span>{place.likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </PlaceTitleBlock>
  );
};

export default PlaceTitle;

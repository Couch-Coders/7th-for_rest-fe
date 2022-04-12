import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { Tag } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

const PlacesItemBlock = styled.div`
  margin-top: 2rem;
  & + & {
    margin-left: 3rem;
  }
`;

const CustomCard = styled(Card)`
  border-radius: 2rem;

  width: 300px;
  img {
    border-radius: 2rem 2rem 0 0;
    height: 250px;
    object-fit: cover;
    border: 1px solid #f0f0f0;
  }
`;

const CustomTag = styled(Tag)`
  margin-top: 1rem;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.9rem;
`;

const { Meta } = Card;

const PlacesItem = ({ item }) => {
  const img_url = item.img_url
    ? item.img_url
    : require('../../../assets/noImg.png');

  return (
    <PlacesItemBlock>
      <CustomCard cover={<img alt={item.placeName} src={img_url} />}>
        <TitleBox>
          <Meta title={item.placeName} />
          <p>
            <HeartTwoTone twoToneColor="#eb2f96" />
            <em>{item.heart}</em>
          </p>
        </TitleBox>
        {item.tag &&
          item.tag.map((item, index) => {
            return (
              <CustomTag color="green" key={index}>
                {item}
              </CustomTag>
            );
          })}
      </CustomCard>
    </PlacesItemBlock>
  );
};

export default PlacesItem;

import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { Tag } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
    object-fit: fill;
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
  const img_url = item.img_src
    ? item.img_src
    : require('../../../assets/noImg.png');

  const tagRender = (tag) => {
    const tagAry = tag.split('\n');
    return tagAry.map((item, index) => (
      <CustomTag color="green" key={index}>
        {item}
      </CustomTag>
    ));
  };

  return (
    <PlacesItemBlock>
      <Link to={`/detail/${item.id}`}>
        <CustomCard cover={<img alt={item.name} src={img_url} />}>
          <TitleBox>
            <Meta title={item.name} />
            <p>
              <HeartTwoTone twoToneColor="#eb2f96" />
              <em>{item.likeCount}</em>
            </p>
          </TitleBox>
          {item.tag && tagRender(item.tag)}
        </CustomCard>
      </Link>
    </PlacesItemBlock>
  );
};

export default PlacesItem;

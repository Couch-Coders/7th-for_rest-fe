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
  img {
    border-radius: 2rem 2rem 0 0;
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

const PlacesItem = () => {
  return (
    <PlacesItemBlock>
      <CustomCard
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <TitleBox>
          <Meta title="Card title" />
          <p>
            <HeartTwoTone twoToneColor="#eb2f96" />1
          </p>
        </TitleBox>
        <CustomTag color="green">green</CustomTag>
        <CustomTag color="green">green</CustomTag>
        <CustomTag color="green">green</CustomTag>
      </CustomCard>
    </PlacesItemBlock>
  );
};

export default PlacesItem;

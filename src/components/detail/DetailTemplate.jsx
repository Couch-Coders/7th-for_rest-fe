import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import { Tabs } from 'antd';
import { Tag } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { KakaoMapScript } from '../../lib/kakaoMap';

const DetailTemplateBlock = styled(Responsive)`
  margin-top: 5vh;
`;

const TitleWrapper = styled.div`
  height: 400px;
  background: #eef2f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .contentBlock {
    display:flex;
    justify-content: space-between;
    img {
      object-fit: cover;
      width: 400px;
      height: 300px;
      margin-left: 10rem;
      background: gray;
    }
    .textBlock{
      h1{
      margin-left:15vw;
    }
    .heartInfo{
      margin-left:25vw;
      span{
        text-align:center;
        font-size:20px;
      }
    }
    .tagInfo{
      margin-left:15vw;
      margin-top:10vh;
      width:240px;
      flex-wrap:wrap;
    }
    }

  }
  }
`;

const CustomTag = styled(Tag)`
  margin-top: 1rem;
`;
const { TabPane } = Tabs;

const tabStyle = {
  paddingLeft: '1rem',
  paddingRight: '1rem',
  marginTop: '5vh',
  border: '1px solid #f0f0f0',
  borderRadius: '0.5rem',
};

const CustomTab = styled(TabPane)`
  margin-top: -1rem;

  .infoBlock + .infoBlock {
    border-top: 1px solid #f0f0f0;
    margin-top: 1rem;
  }

  .infoBlock {
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;

    .category {
      width: 200px;
    }
    .info {
      width: 100%;
      text-align: left;
    }
  }
`;

const TabItem = styled.div`
  margin-top: -1rem;
  display: none;

  ${(props) =>
    props.checked &&
    css`
      display: block;
    `}

  .infoBlock + .infoBlock {
    border-top: 1px solid #f0f0f0;
    margin-top: 1rem;
  }

  .infoBlock {
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;

    .category {
      width: 200px;
    }
    .info {
      width: 100%;
      text-align: left;
    }
  }
`;

const ReplyInput = styled.div`
  margin-top: 5vh;
`;

const ReplyBlock = styled.div`
  ${(props) =>
    props.noReply &&
    css`
      display: none;
    `}
  margin-top: 5vh;
`;
const DetailTemplate = () => {
  useEffect(() => {
    KakaoMapScript('경기도 부천시 원미로 89번길');
  }, []);

  console.log('ss');
  return (
    <DetailTemplateBlock>
      <TitleWrapper>
        <div className="contentBlock">
          <img alt="" />
          <div className="textBlock">
            <h1>title</h1>
            <div className="heartInfo">
              <HeartTwoTone
                twoToneColor="#eb2f96"
                style={{ fontSize: '20px' }}
              />
              <span>15</span>
            </div>
            <div className="tagInfo">
              <CustomTag color="green">tag</CustomTag>
              <CustomTag color="green">tag</CustomTag>
              <CustomTag color="green">tag</CustomTag>
              <CustomTag color="green">tag</CustomTag>
              <CustomTag color="green">tag</CustomTag>
              <CustomTag color="green">tag</CustomTag>
            </div>
          </div>
        </div>
      </TitleWrapper>
      <Tabs defaultActiveKey="1" style={tabStyle}>
        <TabItem tab="Tab 1" key="1">
          <div className="infoBlock">
            <span className="category">카테고리</span>
            <span className="info"> 설명</span>
          </div>
          <div className="infoBlock">
            <span className="category">카테고리</span>
            <span className="info">
              설213설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명설2133232113213132명3232113213132명
            </span>
          </div>
          <div className="infoBlock">
            <span className="category">카테고리</span>
            <span className="info"> 설명</span>
          </div>
          <div className="infoBlock">
            <span className="category">카테고리</span>
            <span className="info"> 설명</span>
          </div>
        </TabItem>
        <TabItem tab="Tab 2" key="2" checked>
          <div className="infoBlock">
            <span className="category">카테고리</span>
            <span className="info"> 설명</span>
          </div>
          <div className="infoBlock">
            <span className="category">카카오맵</span>
            <span className="info">
              <div id="kakaoMap" />
            </span>
          </div>
        </TabItem>
      </Tabs>

      <ReplyInput>
        <button>등록</button>
        <textarea placeholder="리뷰를 입력해주세요."></textarea>
      </ReplyInput>

      <ReplyBlock>리뷰들</ReplyBlock>
    </DetailTemplateBlock>
  );
};

export default DetailTemplate;

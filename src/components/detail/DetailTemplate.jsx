import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import { Tabs } from 'antd';

const DetailTemplateBlock = styled(Responsive)`
  margin-top: 5vh;
`;

const TitleBlock = styled.div`
  height: 400px;
  background: #eef2f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img {
    img {
      object-fit: cover;
      width: 400px;
      height: 300px;
      margin-left: 10rem;
      background: gray;
    }
    h2 {
    }
  }
  .text {
    margin-right: 10rem;
  }
`;

const CustomTab = styled(Tabs)`
  margin-top: 5vh;
`;

const { TabPane } = Tabs;

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
  return (
    <DetailTemplateBlock>
      <TitleBlock>
        <div className="img">
          <img alt="" />
        </div>
      </TitleBlock>
      <CustomTab defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
      </CustomTab>

      <ReplyInput>
        <button>등록</button>
        <textarea placeholder="리뷰를 입력해주세요."></textarea>
      </ReplyInput>

      <ReplyBlock>리뷰들</ReplyBlock>
    </DetailTemplateBlock>
  );
};

export default DetailTemplate;

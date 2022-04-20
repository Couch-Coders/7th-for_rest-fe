import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Button } from 'antd';

const ReviewListBlock = styled(Responsive)`
  margin-top: 3vh;
  margin-left: -1rem;
`;

const Wrapper = styled.div`
  background: whitesmoke;
  padding-top: 1rem;
  border-radius: 0.25rem;
  padding-bottom: 1rem;
`;

const ReviewItemBlock = styled.div`
  & + & {
    margin-top: 1rem;
  }
  display: flex;
  flex-direction: column;
  background: #eef2f5;
`;
const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-right: 1rem;

  .update {
    margin-left: 1rem;
  }
  button {
    border-radius: 0.25rem;
  }
`;

const ReviewItem = styled.div`
    display: flex;
    padding:1rem;
    .logo {
      margin-left:1rem;
      height:48px;
      width: 48px;
      border-radius:50%;
      background:gray;
    }
    .text{
        margin-left:1.5rem;
        width:100%;
        height:fit-content;
        border-radius:0.25rem;
        pre{
          white-space:pre-line;
          word-break:break-all;
        }
    }
  }
`;

const ReviewList = () => {
  return (
    <ReviewListBlock>
      <Wrapper>
        <ReviewItemBlock>
          <ReviewItem>
            <div className="logo">
              <img alt="" />
            </div>
            <div className="text">
              <pre>
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </pre>
            </div>
          </ReviewItem>
          <ButtonBlock>
            <div className="delete">
              <Button type={'primary'} key="test1">
                수정
              </Button>
            </div>
            <div className="update">
              <Button danger key="test">
                삭제
              </Button>
            </div>
          </ButtonBlock>
        </ReviewItemBlock>
        <ReviewItemBlock>
          <ReviewItem>
            <div className="logo">
              <img alt="" />
            </div>
            <div className="text">
              <pre>ddddddddddddddddddddddddddddddd</pre>
            </div>
          </ReviewItem>
          <ButtonBlock>
            <div className="delete">
              <Button type={'primary'} key="test1">
                수정
              </Button>
            </div>
            <div className="update">
              <Button danger key="test">
                삭제
              </Button>
            </div>
          </ButtonBlock>
        </ReviewItemBlock>
        <ReviewItemBlock>
          <ReviewItem>
            <div className="logo">
              <img alt="" />
            </div>
            <div className="text">
              <pre>
                ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </pre>
            </div>
          </ReviewItem>
          <ButtonBlock>
            <div className="delete">
              <Button type={'primary'} key="test1">
                수정
              </Button>
            </div>
            <div className="update">
              <Button danger key="test">
                삭제
              </Button>
            </div>
          </ButtonBlock>
        </ReviewItemBlock>
      </Wrapper>
    </ReviewListBlock>
  );
};

export default ReviewList;

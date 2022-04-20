import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Button } from 'antd';
import { Rate } from 'antd';

const ReviewListBlock = styled(Responsive)`
  margin-top: 3vh;
  margin-left: -1rem;
`;

const ReviewItemBlock = styled.div`
  & + & {
    margin-top: 1rem;
  }
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  border-radius: 0.25rem;
  .dateText {
    margin-left: 6.2rem;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-right: 1rem;

  .ant-rate {
    margin-left: 6rem;
  }

  .buttonGroup {
    display: flex;
    .update {
      margin-left: 1rem;
    }
    button {
      border-radius: 0.25rem;
    }
  }
`;

const ReviewItem = styled.div`
    display: flex;
    align-items:center;
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
      <ReviewItemBlock>
        <ReviewItem>
          <div className="logo">
            <img alt="" />
          </div>{' '}
          <div className="text">
            <pre>
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </pre>
          </div>
        </ReviewItem>
        <div className="dateText">
          <h5>2022-04-22</h5>
        </div>
        <ButtonBlock>
          <Rate disabled defaultValue={3} />
          <div className="buttonGroup">
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
          </div>
        </ButtonBlock>
      </ReviewItemBlock>
      <ReviewItemBlock>
        <ReviewItem>
          <div className="logo">
            <img alt="" />
          </div>{' '}
          <div className="text">
            <pre>
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </pre>
          </div>
        </ReviewItem>
        <ButtonBlock>
          <Rate value={5} />
        </ButtonBlock>
      </ReviewItemBlock>
      <ReviewItemBlock>
        <ReviewItem>
          <div className="logo">
            <img alt="" />
          </div>{' '}
          <div className="text">
            <pre>
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </pre>
          </div>
        </ReviewItem>
        <ButtonBlock>
          <Rate value={5} />
          <div className="buttonGroup">
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
          </div>
        </ButtonBlock>
      </ReviewItemBlock>
    </ReviewListBlock>
  );
};

export default ReviewList;

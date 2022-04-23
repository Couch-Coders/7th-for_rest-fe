import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Modal, Rate, Button } from 'antd';
import Spacer from '../common/Spacer';
import ReviewEditor from './ReviewEditor';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const ReviewListBlock = styled(Responsive)`
  margin-top: 3vh;
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
      img{
        width:100%;
        height:100%;
        border-radius:50%;
      }
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

const formatDate = (dateText) => {
  const date = new Date(dateText);
  return (
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1 > 9
      ? (date.getMonth() + 1).toString()
      : '0' + (date.getMonth() + 1)) +
    '-' +
    (date.getDate() > 9
      ? date.getDate().toString()
      : '0' + date.getDate().toString())
  );
};
const ReviewList = ({ user, reviews, onPublish, onRemove }) => {
  const [updateItem, setUpdateItem] = useState(0);

  const isWriter = (userId, reviewWriterId) => {
    return userId === reviewWriterId;
  };

  const onModify = (item) => {
    setUpdateItem(item.id);
  };
  const onModifyCancel = () => {
    setUpdateItem(0);
  };

  const confirmModal = (revewId) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '삭제하시겠습니까',
      cancelText: '취소',
      okText: '확인',
      centered: true,
      onOk() {
        onRemove({ reviewId: revewId });
      },
      onCancel() {},
    });
  };

  return (
    <>
      <ReviewListBlock>
        {reviews?.map((item, idx) => {
          return item.id === updateItem ? (
            <ReviewEditor
              user={user}
              item={item}
              key={idx}
              isUpdate
              onCancel={onModifyCancel}
              onPublish={onPublish}
            />
          ) : (
            <ReviewItemBlock key={idx}>
              <ReviewItem>
                <div className="logo">
                  <img src={item.picture} alt={item.name} />
                </div>
                <div className="text">
                  <pre>{item.content}</pre>
                </div>
              </ReviewItem>
              <div className="dateText">
                <h5>{formatDate(item.createdDate)} </h5>
              </div>
              <ButtonBlock>
                <Rate disabled value={item.reviewRating} />
                {user && isWriter(user.memberId, item.memberId) ? (
                  <div className="buttonGroup">
                    <div className="delete">
                      <Button
                        type={'primary'}
                        key={'update' + idx}
                        onClick={() => onModify(item)}
                      >
                        수정
                      </Button>
                    </div>
                    <div className="update">
                      <Button
                        danger
                        key={'delte' + idx}
                        onClick={() => confirmModal(item.id)}
                      >
                        삭제
                      </Button>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </ButtonBlock>
            </ReviewItemBlock>
          );
        })}
        <Spacer />
      </ReviewListBlock>
    </>
  );
};

export default ReviewList;

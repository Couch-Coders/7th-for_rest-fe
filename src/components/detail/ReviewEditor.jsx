import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Button } from 'antd';
import { Rate } from 'antd';
import { css } from 'styled-components';

const ReviewEditorBlock = styled(Responsive)`
  margin-top: 7vh;

  ${(props) =>
    props.checked &&
    css`
      margin-left:-1rem;
      margin-right:1rem;
      margin-top: 3vh;
      }
    `}
`;

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
`;

const EditorBlock = styled.div`
  border-radius: 0.5rem;
  display: flex;
  .input {
    width: 100%;
    height: fit-content;
    textarea {
      width: 100%;
      height: 150px;
      border-radius: 0.25rem;
    }
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  .buttonGroup {
    display: flex;
    .cancel {
      margin-left: 1rem;
    }
    button {
      border-radius: 0.25rem;
    }
  }
`;

const initialState = {
  content: '',
  reviewRating: 5,
  image: null,
};

const validateContent = (content) => {
  return (
    'string' === typeof content && 5 <= content.length && content.length <= 300
  );
};

const validateRating = (Rating) => {
  return 'number' === typeof parseFloat(Rating) && 1 <= Rating && Rating <= 5;
};

const ReviewEditor = ({ user, onPublish, item, isUpdate, onCancel }) => {
  const [reviewContent, setReviewContent] = useState(initialState);

  useEffect(() => {
    item &&
      setReviewContent({
        content: item.content,
        reviewRating: item.reviewRating,
        image: item.image,
      });
  }, [item]);

  const { content, reviewRating, image } = reviewContent;

  const onHandleRate = (value) => {
    setReviewContent({
      ...reviewContent,
      reviewRating: value,
    });
  };

  const onChangeText = (e) => {
    setReviewContent({
      ...reviewContent,
      content: e.target.value,
    });
  };

  const onSubmit = () => {
    if (!user) {
      alert('로그인 후 작성가능합니다');
      return null;
    }
    if (!validateContent(content) || !validateRating(reviewRating)) {
      alert('입력값 오류');
      return null;
    }
    if (item) {
      onPublish({ reviewId: item.id, content, reviewRating, image });
      onCancel();
    } else {
      onPublish({ content, reviewRating, image });
    }
    setReviewContent(initialState);
  };

  return (
    <ReviewEditorBlock checked={isUpdate}>
      <EditorWrapper>
        <ButtonBlock>
          {user ? (
            <Rate value={reviewRating} onChange={onHandleRate} />
          ) : (
            <Rate value={5} disabled />
          )}
          <div className="buttonGroup">
            <div className="submit">
              <Button type={'primary'} onClick={onSubmit}>
                등록
              </Button>
            </div>
            {item ? (
              <div className="cancel">
                <Button danger onClick={onCancel}>
                  취소
                </Button>
              </div>
            ) : (
              ''
            )}
          </div>
        </ButtonBlock>
        <EditorBlock>
          <div className="logo">
            <img alt="" />
          </div>
          <div className="input">
            {user ? (
              <textarea
                placeholder="리뷰를 입력해주세요(5글자 이상 300자 이하)"
                onChange={onChangeText}
                value={content}
              />
            ) : (
              <textarea
                placeholder="리뷰작성은 로그인 상태에서 가능합니다."
                disabled
              />
            )}
          </div>
        </EditorBlock>
      </EditorWrapper>
    </ReviewEditorBlock>
  );
};

export default ReviewEditor;

import React, { useCallback, useEffect, useState } from 'react';
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

const ReviewEditor = ({ user, onPublish, reviewItem, isUpdate, onCancel }) => {
  const [reviewContent, setReviewContent] = useState(initialState);

  useEffect(() => {
    reviewItem &&
      setReviewContent({
        content: reviewItem.content,
        reviewRating: reviewItem.reviewRating,
        image: reviewItem.image,
      });
  }, [reviewItem]);

  const { content, reviewRating, image } = reviewContent;

  const onHandleRate = useCallback(
    (value) => {
      setReviewContent({
        ...reviewContent,
        reviewRating: value,
      });
    },
    [reviewContent],
  );

  const onChangeText = useCallback(
    (e) => {
      setReviewContent({
        ...reviewContent,
        content: e.target.value,
      });
    },
    [reviewContent],
  );

  const onSubmit = useCallback(() => {
    if (!user) {
      alert('????????? ??? ?????????????????????');
      return null;
    }
    if (!validateContent(content) || !validateRating(reviewRating)) {
      alert('????????? ??????');
      return null;
    }
    if (reviewItem) {
      onPublish({ reviewId: reviewItem.id, content, reviewRating, image });
      onCancel();
    } else {
      onPublish({ content, reviewRating, image });
    }
    setReviewContent(initialState);
  }, [content, image, reviewItem, onCancel, onPublish, reviewRating, user]);

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
                ??????
              </Button>
            </div>
            {reviewItem ? (
              <div className="cancel">
                <Button danger onClick={onCancel}>
                  ??????
                </Button>
              </div>
            ) : (
              ''
            )}
          </div>
        </ButtonBlock>
        <EditorBlock>
          <div className="input">
            {user ? (
              <textarea
                placeholder="????????? ??????????????????(5?????? ?????? 300??? ??????)"
                onChange={onChangeText}
                value={content}
              />
            ) : (
              <textarea
                placeholder="??????????????? ????????? ???????????? ???????????????."
                disabled
              />
            )}
          </div>
        </EditorBlock>
      </EditorWrapper>
    </ReviewEditorBlock>
  );
};

export default React.memo(ReviewEditor);

import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Button } from 'antd';
import { Rate } from 'antd';

const ReviewEditorBlock = styled(Responsive)`
  margin-top: 7vh;
  margin-left: -1rem;
`;

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
`;

const EditorBlock = styled.div`
  border-radius: 0.5rem;
    display: flex;
    .input{
        width:100%;
        height:fit-content;
        textarea{
            width:100%;
            height:150px;
            border-radius:0.25rem;
        }
    }

  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  button {
    border-radius: 0.25rem;
  }
`;

const ReviewEditor = () => {
  return (
    <ReviewEditorBlock>
      <EditorWrapper>
        <ButtonBlock>
          <Rate value={5} />
          <div className="submit">
            <Button type={'primary'}>등록</Button>
          </div>
        </ButtonBlock>
        <EditorBlock>
          <div className="logo">
            <img alt="" />
          </div>
          <div className="input">
            <textarea />
          </div>
        </EditorBlock>
      </EditorWrapper>
    </ReviewEditorBlock>
  );
};

export default ReviewEditor;

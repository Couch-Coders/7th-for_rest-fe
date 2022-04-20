import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Button } from 'antd';

const ReviewEditorBlock = styled(Responsive)`
  margin-top: 7vh;
  margin-left: -1rem;
`;

const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #eef2f5;
  border-radius: 0.5rem;
`;

const EditorBlock = styled.div`

  background: #eef2f5;
  border-radius: 0.5rem;
    display: flex;
    padding:1rem;
    .logo {
        margin-left:1rem;
        height:48px;
      width: 48px;
      border-radius:50%;
      background:gray;
    }
    .input{
        margin-left:1.5rem;
        width:100%;
        height:fit-content;
        textarea{
            width:100%;
            height:70px;
            border-radius:0.25rem;
        }
    }

  }
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 1rem;
  margin-right: 1rem;
  button {
    border-radius: 0.25rem;
  }
`;

const ReviewEditor = () => {
  return (
    <ReviewEditorBlock>
      <EditorWrapper>
        <EditorBlock>
          <div className="logo">
            <img alt="" />
          </div>
          <div className="input">
            <textarea />
          </div>
        </EditorBlock>
        <ButtonBlock>
          <div className="submit">
            <Button type={'primary'}>등록</Button>
          </div>
        </ButtonBlock>
      </EditorWrapper>
    </ReviewEditorBlock>
  );
};

export default ReviewEditor;

import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'antd';
import tagData from '../../../assets/tagData.json';
import { useState } from 'react';
import CatTagItem from './CatTagItem';

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagModalBlock = styled.div`
  width: 640px;
  background: white;
  padding: 1.5rem;
  border-radius: 2rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);

  h2 {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    border-bottom: 1px solid gray;
  }
  .tagBox {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem 0 2rem;
    position: relative;
    right: 0.5rem;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 1rem;
    }
  }
`;

const CatTagModal = ({
  visible,
  title,
  onClick,
  onReset,
  onToggleCat,
  onToggleReg,
  category,
}) => {
  const [index, setIndex] = useState(0);

  function render(index) {
    const catItem = [];
    const result = [];
    let viewItem = 8; //카테고리 모달에서 한번에 보여줄 아이템 수
    let itemIndex = 1 + index;
    let i = 0; //while문에서 사용

    tagData.category.forEach((item) => {
      catItem.push(item);
    });
    //index*viewItem 값 만큼 반복,
    while (i < itemIndex * viewItem && i < catItem.length) {
      //선택된 카테고리와 아이템의 카테고리가 같을 경우에만 picked 값 설정
      result.push(
        <CatTagItem
          item={catItem[i]}
          key={i}
          onClick={onClickCatTag}
          checked={category === catItem[i]}
        >
          {catItem[i]}
        </CatTagItem>,
      );
      i++;
    }
    //인덱스가 item.length보다 작을경우 ... 표시가 있는 인덱스를 1 올려주는 더보기 아이템 생성
    if (i < catItem.length) {
      result.push(
        <CatTagItem key={i} onClick={() => setIndex((cur) => cur + 1)}>
          ...
        </CatTagItem>,
      );
    }
    return result;
  }
  const onCancelCat = () => {
    setIndex(1);
    onReset();
    onToggleCat();
  };

  //이전 검색결과 값이 남아있을수 있어 초기화
  const onClickCatTag = ({ category }) => {
    onReset();

    onClick({ category });
  };
  const onConfirm = () => {
    if (category === '') return;
    onToggleCat();
    onToggleReg();
  };

  if (!visible) return null;
  return (
    <FullScreen>
      <TagModalBlock>
        <h2>{title}</h2>

        <div className="tagBox">{render(index)}</div>

        <div className="buttons">
          <Button
            size={'large'}
            shape={'round'}
            type="primary"
            onClick={onConfirm}
          >
            확인
          </Button>
          <Button size={'large'} shape={'round'} onClick={onCancelCat}>
            cancel
          </Button>
        </div>
      </TagModalBlock>
    </FullScreen>
  );
};

export default CatTagModal;

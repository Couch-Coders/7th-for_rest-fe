import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../../common/Responsive';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import mainInfoData from '../../../assets/mainInfoData.json';
import SlideItem from './SlideItem';

const SlideWrapper = styled(Responsive)`
  overflow: hidden;
`;

const SlideTemplateBlock = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: space-around;
`;

const SlideButton = styled.div`
  position: absolute;
  top: 365px;
  z-index: 5;
  :hover {
    cursor: pointer;
  }
  ${(props) =>
    props.left &&
    css`
      left: calc((100% - 940px) / 2);
    `}
  ${(props) =>
    props.right &&
    css`
      right: calc((100% - 940px) / 2);
    `}
`;

function rendering() {
  const item = [];
  const result = [];
  let itemCount = 0;
  let index = 0;
  for (const key in mainInfoData.recommendInfo) {
    itemCount += 1;
    item.push(mainInfoData.recommendInfo[key]);
  }
  //무한 슬라이드를 위해서 아이템 앞뒤로 2개씩의 아이템이 더 필요 => itemCount +4 만큼 더 렌더링필요
  //아이템이 총 4개일경우 렌더링해야되는것 : 34 1234 12
  //아이템이 총 5개일경우 렌더링해야되는것 : 45 12345 12
  //  현재는 23 123 12 모습.  총 7개 아이템 필요
  while (index < itemCount + 4) {
    let order =
      index + (itemCount - 2) < 3
        ? index + (itemCount - 2)
        : (index + (itemCount - 2)) % itemCount;
    result.push(<SlideItem item={item[order]} key={index} />);
    index++;
  }
  return [itemCount, result];
}

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const SlideTemplate = () => {
  const [index, setIndex] = useState(0);
  const moveLength = 907;
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease-in-out`;
  const [slideTransition, setTransition] = useState(transitionStyle);
  const [isOngoing, setIsOngoing] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(false);

  //아이템의 갯수와 렌더링할 리액트EL 배열 반환
  const [itemCount, result] = rendering();
  function replaceSlide(index) {
    setTimeout(() => {
      setTransition('');
      setIndex(-1 * index);
    }, transitionTime);
  }
  useInterval(() => {
    if (isOngoing && !isMouseOver) {
      if (index >= itemCount - 2) replaceSlide(index);
      setIndex(index + 1);
      setTransition(transitionStyle);
    } else {
      setIsOngoing(true);
    }
  }, 2000);

  const onClickBtn = (num) => {
    setIsOngoing(false);
    setIndex(index + num);
    if (index === num * (itemCount - 2)) replaceSlide(index);
    setTransition(transitionStyle);
  };

  return (
    <SlideWrapper>
      <SlideButton
        left
        onClick={() => onClickBtn(-1)}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        <LeftOutlined style={{ fontSize: '36px' }} />
      </SlideButton>
      <SlideButton
        right
        onClick={() => onClickBtn(1)}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        <RightOutlined style={{ fontSize: '36px' }} />
      </SlideButton>

      <SlideTemplateBlock
        style={{
          transition: slideTransition,
          transform: `translateX(${-1 * (moveLength * index)}px)`,
        }}
      >
        {result}
      </SlideTemplateBlock>
    </SlideWrapper>
  );
};

export default SlideTemplate;

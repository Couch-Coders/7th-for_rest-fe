import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../../common/Responsive';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import mainInfoData from '../../../assets/mainInfoData.json';
import SlideItem from './SlideItem';

const SlideWrapper = styled(Responsive)`
  overflow: hidden;
`;

const SlideTemplateBlock = styled.div`
  margin-top: 7rem;
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
  // oreder는 SlideItem이 recommendInfo를 담은 item의 몇 번째 정보를 가지고 있어야 하는지 정하는데 사용된다.
  while (index < itemCount + 4) {
    let order = index < itemCount ? index : index % itemCount;
    result.push(<SlideItem slideItem={item[order]} key={index} />);
    index++;
  }
  return [itemCount, result];
}

// Dan이라는 개발자가 작성한 useInterval 함수
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

  const replaceSlide = useCallback((index) => {
    //함수의 실행은 슬라이드의 이동과 동시에 실행, 이동이 끝남과 동시에 transition의 스타일을 바꾸고, 위치이동
    setTimeout(() => {
      setTransition('');
      setIndex(-1 * index);
    }, transitionTime);
  }, []);

  const onClickBtn = useCallback(
    (num) => {
      //num은 왼쪽과 오른쪽을 구분할때 사용. 왼쪽은 -1, 오른쪽은 1
      setIsOngoing(false);
      setIndex(index + num);
      if (index === num * (itemCount - 2)) replaceSlide(index);
      /*index는 아직 숫자가 갱신되지 않은 상태이기때문에 itemCount - 2 적용
      itemCount는 현재의 경우 3, 인덱스는 가운데 이미지가 0,한칸 전진시 1, 두칸 옮겨가면 2(현재 함수 실행시 인덱스는 갱신이 안된 1) */
      setTransition(transitionStyle);
    },
    [index, itemCount, replaceSlide, transitionStyle],
  );

  useInterval(() => {
    if (isOngoing && !isMouseOver) {
      //버튼을 클릭시 or over시 작동X
      if (index >= itemCount - 2) replaceSlide(index);
      setIndex(index + 1);
      setTransition(transitionStyle);
    } else {
      setIsOngoing(true); // 버튼 클릭이 없을시 일정시간후 함수가 실행되도록 변경
    }
  }, 2000);

  return (
    <SlideWrapper>
      <SlideButton
        left
        onClick={() => {
          onClickBtn(-1);
        }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        <LeftOutlined style={{ fontSize: '36px' }} />
      </SlideButton>
      <SlideButton
        right
        onClick={() => {
          onClickBtn(1);
        }}
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

export default React.memo(SlideTemplate);

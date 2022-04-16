import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PlacesItem from './PlacesItem';
import Responsive from './../../common/Responsive';

const PlacesTemplateBlock = styled(Responsive)`
  margin-top: 15vh;
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .Counter {
    margin-left: calc((100% - 985px) / 2);
    font-size: 1rem;
    margin-right: 3rem;
  }

  .sortMenu {
    margin-left: 5rem;
    font-size: 1rem;

    :hover {
      cursor: pointer;
    }
  }
`;

const ItemBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & + & {
    margin-top: 10rem;
  }
  overflow: hidden;
`;

// ItemBlock에 아이템이 3개가 안될경우 보이진 않지만 공간만 차지하는 DIV
const TempDiv = styled.div`
  width: 300px;
  margin-left: 3rem;
`;

const Spacer = styled.div`
  height: 5rem;
`;

const MAX_VIEW = 100;
const VIEW_PLACE_ITEM = 12;

const PlacesTemplate = ({ places }) => {
  const scorllTarget = useRef(null);
  const target = useRef(null);
  const [index, setIndex] = useState(1);

  function render(index) {

    const result = [];
    let temp = [];
    let itemCount = 0;

    while (itemCount < VIEW_PLACE_ITEM * index && itemCount < places.length) {
      temp.push(<PlacesItem item={places[itemCount]} key={itemCount} />);
      itemCount += 1;
      if (itemCount % 3 === 0) {
        result.push(<ItemBlock key={itemCount}>{temp}</ItemBlock>);
        temp = [];
      } else if (
        itemCount === VIEW_PLACE_ITEM * index ||
        itemCount === places.length
      ) {
        // 공간만 채우기 위해, 부족한 수 만큼 TempDiv 추가
        const gap = 3 - (itemCount % 3);
        for (let index = 0; index < gap; index++) {
          temp.push(<TempDiv key={index}></TempDiv>);
        }

        result.push(<ItemBlock key={itemCount}>{temp}</ItemBlock>);
        temp = [];
      }
    }
    return result;
  }
  if (index === 1) {
    scorllTarget?.current?.scrollIntoView({ behavior: 'smooth' });
  }
  useEffect(() => {
    const options = {
      threshold: 0.25,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        if (index < MAX_VIEW) setIndex((cur) => cur + 1);
      });
    };
    const io = new IntersectionObserver(handleIntersection, options);

    if (target.current) {
      io.observe(target.current);
    }

    return () => io && io.disconnect();
  }, [target, index]);
  console.log(index);
  if (places.length === 0) return <>결과 없음</>;

  return (
    <>
      <PlacesTemplateBlock>
        <TextBlock ref={scorllTarget}>
          <h4 className="Counter">총 여러개</h4>
          <h4>/</h4>
          <h4 className="sortMenu">좋아요 순</h4>
        </TextBlock>
        {render(index)}
        <Spacer ref={target} />
      </PlacesTemplateBlock>
    </>
  );
};

export default PlacesTemplate;

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PlacesItem from './PlacesItem';
import Responsive from './../../common/Responsive';

const PlacesTemplateBlock = styled(Responsive)`
  margin-top: 10vh;
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

const PlacesTemplate = ({ places, totalPages, onSearch }) => {
  const scorllTarget = useRef(null);
  const target = useRef(null);
  const [index, setIndex] = useState(1);
  const [data, setData] = useState([]);
  const [throttle, setThrottle] = useState(false);
  // let throttle = useRef(false);
  // function setThrottle(bool) {
  //   throttle = bool;
  // }

  function render(index) {
    const result = [];
    let temp = [];
    let itemCount = 0;
    while (itemCount < data.length) {
      temp.push(<PlacesItem item={data[itemCount]} key={itemCount} />);
      itemCount += 1;
      if (itemCount % 3 === 0) {
        result.push(<ItemBlock key={itemCount}>{temp}</ItemBlock>);
        temp = [];
      } else if (itemCount === data.length) {
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

  useEffect(() => {
    try {
      if (places.length !== 0) {
        setData((data) => [...data, ...places]);
      }
    } catch (e) {
      setData([]);
    }
    return () => {
      if (places.length === 0) setData([]);
    };
  }, [places]);

  useEffect(() => {
    if (throttle) return;
    const options = {
      threshold: 0.25,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        if (index < MAX_VIEW && index < totalPages) {
          setThrottle(true);
          setTimeout(() => {
            setIndex(index + 1);
            onSearch(index);
            setThrottle(false);
          }, 1000);
        }
      });
    };
    const io = new IntersectionObserver(handleIntersection, options);

    if (target.current) {
      io.observe(target.current);
    }
    return () => {
      io && io.disconnect();
    };
  }, [index, totalPages, throttle, onSearch]);

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

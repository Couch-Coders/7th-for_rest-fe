import React, { useCallback, useEffect, useRef, useState } from 'react';
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
    color: peru;
    font-weight: 500;
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
`;

// ItemBlock에 아이템이 3개가 안될경우 보이진 않지만 공간만 차지하는 DIV
const TempDiv = styled.div`
  width: 300px;
  margin-left: 3rem;
`;

const Spacer = styled.div`
  height: 5rem;
`;

const PlacesTemplate = ({ places, totalPages, totalElements, onSearch }) => {
  const target = useRef(null);
  const [data, setData] = useState([]);
  let index = useRef(1).current;
  let throttle = useRef(false).current;
  const setIndex = useCallback(() => {
    index++;
  }, [index]);

  const setThrottle = useCallback(() => {
    throttle = !throttle;
  }, [throttle]);

  const render = useCallback(
    (index) => {
      const result = [];
      let temp = [];
      let itemCount = 0;
      while (itemCount < data.length) {
        temp.push(<PlacesItem item={data[itemCount]} key={itemCount} />);
        itemCount += 1;
        if (itemCount % 3 === 0) {
          //3개에 한번씩 ItemBlock으로 감싸주기
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
    },
    [data],
  );

  useEffect(() => {
    if (places.length !== 0) {
      setData((data) => [...data, ...places]);
    }
    return () => {
      if (places.length === 0) setData([]);
    };
  }, [places]);

  useEffect(() => {
    if (throttle) return;
    const options = {
      threshold: 0,
    };

    const timer = () =>
      setTimeout(() => {
        onSearch(index);
        setIndex();
        setThrottle();
      }, 1000);

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        if (index < totalPages) {
          setThrottle();
          timer();
        }
      });
    };
    const io = new IntersectionObserver(handleIntersection, options);

    if (target.current) {
      io.observe(target.current);
    }
    return () => {
      io && io.disconnect();
      clearTimeout(timer());
    };
  }, [index, totalPages, onSearch, throttle, setThrottle, setIndex]);

  return (
    <>
      <PlacesTemplateBlock>
        <TextBlock>
          <h4 className="Counter">총 {totalElements} 개의 장소</h4>
          {/*
           <h4>/</h4>
          <h4 className="sortMenu">좋아요 순</h4>
        */}
        </TextBlock>
        {render(index)}
        <Spacer ref={target} />
      </PlacesTemplateBlock>
    </>
  );
};

export default React.memo(PlacesTemplate);

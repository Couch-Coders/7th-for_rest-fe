import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Responsive from "./../../common/Responsive";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { AddSlidesEvents } from "../../../lib/slide";


const SlideWrapper = styled(Responsive)`
  overflow: hidden;
`;

const SlideTemplateBlock = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-around;
  position: relative;
`;

const SlideItemBlock = styled.div`
  & + & {
    margin-left: 3rem;
  }
  img {
    object-fit: cover;
    width: 860px;
    height: 295px;
    border-radius: 1em;
  }
  h3 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

const SlideLeftButton = styled.div`
  position: absolute;
  left: calc((100% - 940px) / 2);
  top: 423px;
  z-index: 5;
  :hover {
    cursor: pointer;
  }
`;

const SlideRighttButton = styled.div`
  position: absolute;
  right: calc((100% - 940px) / 2);
  top: 423px;
  z-index: 5;
  :hover {
    cursor: pointer;
  }
`;

const SlideTemplate = ({ data }) => {
  const slideTarget = useRef();

  useEffect(() => {
    AddSlidesEvents(slideTarget.current);
    return () => {

    };
  }, []);

  return (
    <SlideWrapper>
      <SlideLeftButton>
        <LeftOutlined style={{ fontSize: "36px" }} />
      </SlideLeftButton>
      <SlideRighttButton>
        <RightOutlined style={{ fontSize: "36px" }} />
      </SlideRighttButton>

      <SlideTemplateBlock ref={slideTarget}>
        <SlideItemBlock>
          <Link to="/">
            <img
              src={require(`../../../assets/slideImg/${"slide"}_img1.png`)}
            ></img>
          </Link>
        </SlideItemBlock>
        <SlideItemBlock>
          <Link to="/">
            <h3>서울내 공원</h3>
            <img
              src={require(`../../../assets/slideImg/${"slide"}_img2.png`)}
            ></img>
          </Link>
        </SlideItemBlock>
        <SlideItemBlock>
          <Link to="/">
            <img
              src={require(`../../../assets/slideImg/${"slide"}_img3.png`)}
            ></img>
          </Link>
        </SlideItemBlock>
      </SlideTemplateBlock>
    </SlideWrapper>
  );
};

export default SlideTemplate;

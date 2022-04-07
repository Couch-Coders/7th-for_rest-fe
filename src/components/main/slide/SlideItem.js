import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

// h3. 텍스트부분 position 수정해야함.
const SlideItem = ({ item }) => {
  return (
    <SlideItemBlock>
      <Link to="/">
        <img
          src={require(`../../../assets/slideImg/${item.img_url}`)}
          alt={item.serachType}
        ></img>
      </Link>
    </SlideItemBlock>
  );
};

export default SlideItem;

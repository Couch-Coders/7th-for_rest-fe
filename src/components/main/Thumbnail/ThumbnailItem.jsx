import React from 'react';
import styled from 'styled-components';

const ThumbnailItemBlock = styled.div`
  border: 2px solid gray;
  width: 200px;
  height: 200px;
  margin-top: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-left: 3rem;
  }

  img {
    object-fit: cover;
    filter: brightness(65%);
    width: 196px;
    height: 196px;
    box-sizing: border-box;
    border-radius: 0.6rem;
  }
  h2 {
    color: #ffffff;
    z-index: 5;
    position: absolute;
  }
  :hover {
    img {
      filter: brightness(90%);
    }
    cursor: pointer;
  }
`;

const ThumbnailItem = ({ item, onClick }) => {
  const onClickItem = () =>
    onClick({
      category: item.name,
    });

  return (
    <ThumbnailItemBlock onClick={onClickItem}>
      <h2>{item.name}</h2>
      <img
        src={require(`../../../assets/tagImg/${item.img_url}`)}
        alt={item.name}
      ></img>
    </ThumbnailItemBlock>
  );
};

export default ThumbnailItem;

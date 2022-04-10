import React from 'react';
import styled from 'styled-components';
import PlacesItem from './PlacesItem';
import Responsive from './../../common/Responsive';

const PlacesTemplateBlock = styled(Responsive)`
  margin-top: 3rem;
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
`;

const PlacesTemplate = () => {
  return (
    <PlacesTemplateBlock>
      <TextBlock>
        <h4 className="Counter">총 여러개</h4>
        <h4>/</h4>
        <h4 className="sortMenu">좋아요 순</h4>
      </TextBlock>
      <ItemBlock>
        <PlacesItem />
        <PlacesItem />
        <PlacesItem />
      </ItemBlock>
      <ItemBlock>
        <PlacesItem />
        <PlacesItem />
        <PlacesItem />
      </ItemBlock>
      <ItemBlock>
        <PlacesItem />
        <PlacesItem />
        <PlacesItem />
      </ItemBlock>
      <ItemBlock>
        <PlacesItem />
        <PlacesItem />
        <PlacesItem />
      </ItemBlock>
    </PlacesTemplateBlock>
  );
};

export default PlacesTemplate;

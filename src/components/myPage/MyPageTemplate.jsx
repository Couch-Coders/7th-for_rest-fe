import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import LikeTagCheckBox from './LikeTagCheckBox';
import LikePlace from './LikePlace';
import Error from '../common/Error';

const MyPageTemplateBlock = styled(Responsive)`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
`;

const MyPageTemplate = ({ places, onLikeClick }) => {
  const [sortedPlaces, setSortedPlaces] = useState([]);
  const [selectedTag, setSelectedTag] = useState({
    categorys: [],
    regions: [],
  });

  useEffect(() => {
    if (
      selectedTag.categorys.length === 0 &&
      selectedTag.regions.length === 0
    ) {
      setSortedPlaces(places);
    } else if (selectedTag.categorys.length === 0) {
      setSortedPlaces(
        places.filter((item) => selectedTag.regions.includes(item.region_1)),
      );
    } else if (selectedTag.regions.length === 0) {
      setSortedPlaces(
        places.filter((item) => selectedTag.categorys.includes(item.category)),
      );
    } else {
      setSortedPlaces(
        places.filter(
          (item) =>
            selectedTag.categorys.includes(item.category) &&
            selectedTag.regions.includes(item.region_1),
        ),
      );
    }
  }, [selectedTag.categorys, selectedTag.regions, places]);

  const onClick = (item) => {
    const key = Object.keys(item).toString();
    let updateItem = [];
    const originalItem = selectedTag[key];
    if (!item[key]) {
      setSelectedTag({
        ...selectedTag,
        [key]: updateItem,
      });
    } else {
      if (originalItem.includes(item[key])) {
        updateItem = originalItem.filter(
          (originItem) => originItem !== item[key],
        );
      } else {
        updateItem = [...originalItem, item[key]];
      }
      setSelectedTag({
        ...selectedTag,
        [key]: updateItem,
      });
    }
  };

  return (
    <MyPageTemplateBlock>
      {sortedPlaces.length ? (
        <LikePlace sortedPlaces={sortedPlaces} onLikeClick={onLikeClick} />
      ) : (
        <Error noSearch>{'검색 결과가 없습니다'}</Error>
      )}

      <LikeTagCheckBox
        places={places}
        selectedTag={selectedTag}
        onClick={onClick}
      />
    </MyPageTemplateBlock>
  );
};

export default MyPageTemplate;

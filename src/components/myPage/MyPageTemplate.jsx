import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

const MyPageTemplate = ({ places, onLikeRemove }) => {
  //places 정보를 담고 조건 selectedTag에 따라 필터링할 state
  const [sortedPlaces, setSortedPlaces] = useState([]);
  // 선택된 태그를 담을 state
  const [selectedTag, setSelectedTag] = useState({
    categorys: [],
    regions: [],
  });

  const categorys = useMemo(() => {
    return places ? [...new Set(places.map((item) => item.category))] : [];
  }, [places]);
  const regions = useMemo(() => {
    return places ? [...new Set(places.map((item) => item.region_1))] : [];
  }, [places]);

  useEffect(() => {
    if (
      //선택된 태그가 없으면 전체 정보 저장
      selectedTag.categorys.length === 0 &&
      selectedTag.regions.length === 0
    ) {
      setSortedPlaces(places);
      // 선택된 categorys 태그가 없으면 places의 아이템중에서
      //regions에 저장된 값과 일치하 정보를 필터링
    } else if (selectedTag.categorys.length === 0) {
      setSortedPlaces(
        places.filter((item) => selectedTag.regions.includes(item.region_1)),
      );
    } else if (selectedTag.regions.length === 0) {
      setSortedPlaces(
        places.filter((item) => selectedTag.categorys.includes(item.category)),
      );
    } else {
      //태그가 모두 선택 상황일시 두값 다 필터링
      setSortedPlaces(
        places.filter(
          (item) =>
            selectedTag.categorys.includes(item.category) &&
            selectedTag.regions.includes(item.region_1),
        ),
      );
    }
  }, [selectedTag.categorys, selectedTag.regions, places]);

  const onClick = useCallback(
    (item) => {
      const key = Object.keys(item).toString();
      let updateItem = [];
      const originalItem = selectedTag[key];
      // 전체 버튼 클릭시
      if (!item[key]) {
        setSelectedTag({
          ...selectedTag,
          [key]: updateItem,
        });
      } else {
        // 태그 클릭시 기존 아이템이 존재하면 제거, 없으면 추가
        updateItem = originalItem.includes(item[key])
          ? originalItem.filter((originItem) => originItem !== item[key])
          : [...originalItem, item[key]];
        setSelectedTag({
          ...selectedTag,
          [key]: updateItem,
        });
      }
    },
    [selectedTag],
  );

  const onLikeClick = useCallback(
    async ({ placeId }) => {
      onLikeRemove({ placeId });
    },
    [onLikeRemove],
  );

  return (
    <MyPageTemplateBlock>
      {sortedPlaces.length ? (
        <LikePlace sortedPlaces={sortedPlaces} onLikeClick={onLikeClick} />
      ) : (
        <Error noSearchData>{'검색 결과가 없습니다'}</Error>
      )}

      <LikeTagCheckBox
        categorys={categorys}
        regions={regions}
        selectedTag={selectedTag}
        onClick={onClick}
      />
    </MyPageTemplateBlock>
  );
};

export default React.memo(MyPageTemplate);

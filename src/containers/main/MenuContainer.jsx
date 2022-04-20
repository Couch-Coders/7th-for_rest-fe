import React from 'react';
import ThumbnailTemplate from '../../components/main/thumbnail/ThumbnailTemplate';
import { useState } from 'react';
import CatTagModal from './../../components/main/modal/CatTagModal';
import RegionTagModal from '../../components/main/modal/RegionTagModal';
import { useDispatch, useSelector } from 'react-redux';
import { placesInitialize, getPlaces } from './../../modules/main/places';
import ModalPortal from './../../lib/ModalPotal';
import { onChange } from '../../modules/main/searchParam';
import { paramInitialize } from './../../modules/main/searchParam';

const MenuContainer = () => {
  const dispatch = useDispatch();
  const { category, region_1, region_2 } = useSelector(({ searchParam }) => ({
    category: searchParam.category,
    region_1: searchParam.region_1,
    region_2: searchParam.region_2,
  }));
  const [catModal, setCatModal] = useState(false);
  const [regionModal, setRegionModal] = useState(false);

  const onChangeSearchParam = (item) => {
    const key = Object.keys(item).toString();
    dispatch(
      onChange({
        key: key,
        value: item[key],
      }),
    );
  };

  const onReset = () => {
    dispatch(paramInitialize());
  };

  const onToggleCatModal = () => {
    setCatModal(!catModal);
  };

  const onToggleRegModal = () => {
    setRegionModal(!regionModal);
  };

  const onSearch = () => {
    if (category !== '' && region_1 !== '')
      //검색시에는 0페이지부터 시작
      dispatch(placesInitialize());
    dispatch(getPlaces({ page: 0, category, region_1, region_2 }));
  };

  return (
    <>
      <ThumbnailTemplate
        onReset={onReset}
        onChangeSearchParam={onChangeSearchParam}
        onToggleCat={onToggleCatModal}
        onToggleReg={onToggleRegModal}
      />
      <ModalPortal>
        <CatTagModal
          category={category}
          visible={catModal}
          onChangeSearchParam={onChangeSearchParam}
          onReset={onReset}
          onToggleCat={onToggleCatModal}
          onToggleReg={onToggleRegModal}
          title={'카테고리를 선택해주세요'}
        />
      </ModalPortal>

      <RegionTagModal
        category={category}
        region_1={region_1}
        region_2={region_2}
        visible={regionModal}
        onChangeSearchParam={onChangeSearchParam}
        onSearch={onSearch}
        onReset={onReset}
        onToggleReg={onToggleRegModal}
      />
    </>
  );
};

export default MenuContainer;

import React from 'react';
import ThumbnailTemplate from '../../components/main/thumbnail/ThumbnailTemplate';
import { useState } from 'react';
import CatTagModal from './../../components/main/modal/CatTagModal';
import RegionTagModal from '../../components/main/modal/RegionTagModal';

const MenuContainer = () => {
  const initialState = {
    category: '',
    region_1: '',
    region_2: [],
  };

  const [searchParam, setSearchParam] = useState(initialState);
  const [catModal, setCatModal] = useState(false);
  const [regionModal, setRegionModal] = useState(false);

  const onClick = (item) => {
    const key = Object.keys(item).toString();
    setSearchParam({
      ...searchParam,
      [key]: item[key],
      region_2: [],
    });
  };

  const onResetReg2 = () => {
    setSearchParam({
      ...searchParam,
      region_2: [],
    });
  };

  // region_2는 배열로 받기때문에 별도로 함수 생성
  const onClickReg2 = (Reg_2) => {
    if (searchParam.region_2.includes(Reg_2))
      setSearchParam({
        ...searchParam,
        region_2: searchParam.region_2.filter((item) => item !== Reg_2),
      });
    else
      setSearchParam({
        ...searchParam,
        region_2: [...searchParam.region_2, Reg_2],
      });
  };

  const onCancel = () => {
    setSearchParam(initialState);
  };

  const onToggleCatModal = () => {
    setCatModal(!catModal);
  };

  const onToggleRegModal = () => {
    setRegionModal(!regionModal);
  };

  const onSearch = () => {};

  return (
    <>
      <ThumbnailTemplate
        onClick={onClick}
        onToggleCat={onToggleCatModal}
        onToggleReg={onToggleRegModal}
      />
      <CatTagModal
        category={searchParam.category}
        visible={catModal}
        onClick={onClick}
        onCancel={onCancel}
        onToggleCat={onToggleCatModal}
        onToggleReg={onToggleRegModal}
        title={'카테고리를 선택해주세요'}
      />
      <RegionTagModal
        region_1={searchParam.region_1}
        region_2={searchParam.region_2}
        visible={regionModal}
        onClick={onClick}
        onClickReg2={onClickReg2}
        onReset={onResetReg2}
        onCancel={onCancel}
        onToggleReg={onToggleRegModal}
      />
    </>
  );
};

export default MenuContainer;

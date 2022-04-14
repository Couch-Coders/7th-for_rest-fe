import React from 'react';
<<<<<<< Updated upstream
import ThumbnailTemplate from '../../components/main/Thumbnail/ThumbnailTemplate';
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
=======
import ThumbnailTemplate from '../../components/main/thumbnail/ThumbnailTemplate';
import { useState } from 'react';
import CatTagModal from './../../components/main/modal/CatTagModal';
import RegionTagModal from '../../components/main/modal/RegionTagModal';
import { useDispatch, useSelector } from 'react-redux';
import { serach } from './../../modules/main/places';
import ModalPortal from './../../lib/ModalPotal';
import { onChange } from '../../modules/main/searchParam';
import { initialize } from './../../modules/main/searchParam';

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
    console.log('아이템 파람');
    console.log(item);
>>>>>>> Stashed changes
    const key = Object.keys(item).toString();
    dispatch(
      onChange({
        key: key,
        value: item[key],
      }),
    );
  };

  const onReset = () => {
    dispatch(initialize());
  };

  const onToggleCatModal = () => {
    setCatModal(!catModal);
  };

  const onToggleRegModal = () => {
    setRegionModal(!regionModal);
  };

<<<<<<< Updated upstream
  const onSearch = () => {};

  console.log(searchParam);
  console.log(searchParam.region_1);
=======
  const onSearch = () => {
    if (category !== '' && region_1 !== '')
      dispatch(serach({ category, region_1, region_2 }));
  };
>>>>>>> Stashed changes

  console.log('cat' + category, 'reg' + region_1);
  console.log('region_2');
  console.log(region_2);

  return (
    <>
      <ThumbnailTemplate
<<<<<<< Updated upstream
        onClick={onClick}
        onToggleCat={onToggleCatModal}
        onToggleReg={onToggleRegModal}
      />
      <CatTagModal
        category={searchParam.category}
        visible={catModal}
        onClick={onClick}
        onCancel={onCancel}
=======
        onClick={onChangeSearchParam}
        onReset={onReset}
>>>>>>> Stashed changes
        onToggleCat={onToggleCatModal}
        onToggleReg={onToggleRegModal}
        title={'카테고리를 선택해주세요'}
      />
<<<<<<< Updated upstream
=======
      <ModalPortal>
        <CatTagModal
          category={category}
          visible={catModal}
          onClick={onChangeSearchParam}
          onReset={onReset}
          onToggleCat={onToggleCatModal}
          onToggleReg={onToggleRegModal}
          title={'카테고리를 선택해주세요'}
        />
      </ModalPortal>
>>>>>>> Stashed changes
      <RegionTagModal
        region_1={region_1}
        region_2={region_2}
        visible={regionModal}
<<<<<<< Updated upstream
        onClick={onClick}
        onClickReg2={onClickReg2}
        onReset={onResetReg2}
        onCancel={onCancel}
=======
        onClick={onChangeSearchParam}
        onSearch={onSearch}
        onReset={onReset}
>>>>>>> Stashed changes
        onToggleReg={onToggleRegModal}
      />
    </>
  );
};

export default MenuContainer;

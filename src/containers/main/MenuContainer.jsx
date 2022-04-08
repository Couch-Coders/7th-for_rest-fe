import React from 'react';
import ThumbnailTemplate from '../../components/main/Thumbnail/ThumbnailTemplate';
import { useState } from 'react';
import CatTagModal from './../../components/main/modal/CatTagModal';

const MenuContainer = () => {
  const initialState = {
    category: '',
    region_1: '',
    region_2: '',
  };

  const [searchParam, setSearchParam] = useState(initialState);
  const [catModal, setCatModal] = useState(false);
  const [regionModal, setRegionModal] = useState(false);

  const onClick = (item) => {
    const key = Object.keys(item).toString();
    setSearchParam({
      ...searchParam,
      [key]: item[key],
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
        title={'category'}
      />
    </>
  );
};

export default MenuContainer;

import React from 'react';
import { Modal, Button } from 'antd';
import RegionTagItem from './RegionTagItem';
import styled from 'styled-components';
import tagData from '../../../assets/tagData.json';
import { Link } from 'react-router-dom';

const CustomModal = styled(Modal)`
  overflow: hidden;
`;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TitleBox = styled.div`
  margin-left: -25px;
  margin-top: 1rem;
  width: 520px;
  padding: 16px 24px;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  .h3 {
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
  }
`;

const style = {
  width: '550px',
  height: '350px',
  overflowY: 'auto',
  overflowX: 'hidden',
  WebkitScrollbar: 'none',
};

const RegionTagModal = ({
  category,
  region_1,
  region_2,
  visible,
  onChangeSearchParam,
  onToggleReg,
  onReset,
  onSearch,
}) => {
  const onClickFirstRegion = ({ region_1 }) => {
    onChangeSearchParam({ region_1 });
  };

  const onCancelModal = () => {
    onReset();
    onToggleReg();
  };

  const onClickSecondRegion = (region_2_item) => {
    let updateItem = '';
    if (region_2.includes(region_2_item)) {
      updateItem = region_2.filter((item) => item !== region_2_item);
    } else {
      updateItem = [...region_2, region_2_item];
    }
    onChangeSearchParam({ region_2: updateItem });
  };

  const onResetSecondRegion = () => {
    onChangeSearchParam({ region_2: [] });
  };

  const onConfirm = () => {
    if (region_1 !== '') {
      onSearch();
      onToggleReg();
    }
  };

  //region1에 맞는 클릭 이벤트를 넣는다.
  function Region1Render() {
    const result = [];
    tagData.region1.forEach((item, index) => {
      result.push(
        <RegionTagItem
          item={item}
          key={index}
          checked={region_1 === item}
          onClickFirstRegion={onClickFirstRegion}
        />,
      );
    });
    return result;
  }
  //region2에 맞는 클릭 이벤트를 넣는다.
  function Region2Render() {
    const result = [];
    // 처음에 전체 태그를 하나 넣는다.
    result.push(
      <RegionTagItem
        checked={region_2.length === 0}
        item={'전체'}
        key={'All'}
        onResetSecondRegion={onResetSecondRegion}
      />,
    );
    tagData.region2[region_1].forEach((item, index) => {
      result.push(
        <RegionTagItem
          checked={region_2.includes(item)}
          item={item}
          key={'reg_2' + index}
          onClickSecondRegion={onClickSecondRegion}
        />,
      );
    });
    return result;
  }

  return (
    <CustomModal
      visible={visible}
      title="지역을 선택해주세요"
      centered
      bodyStyle={style}
      footer={[
        <Button key="submit" type="primary" onClick={onConfirm}>
          <Link to={`places/${category}/${region_1}/`}>확인</Link>
        </Button>,
        <Button key="back" onClick={onCancelModal}>
          취소
        </Button>,
      ]}
      onCancel={onCancelModal}
    >
      <TagBox>{Region1Render()}</TagBox>
      {region_1 !== '' ? (
        <>
          <TitleBox>
            <h3>상세지역을 선택해주세요.</h3>
          </TitleBox>
          <TagBox>{Region2Render()}</TagBox>
        </>
      ) : (
        ''
      )}
    </CustomModal>
  );
};

export default RegionTagModal;

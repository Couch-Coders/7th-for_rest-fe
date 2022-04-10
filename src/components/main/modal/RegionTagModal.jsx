import React from 'react';
import { Modal, Button } from 'antd';
import RegionTagItem from './RegionTagItem';
import styled from 'styled-components';
import tagData from '../../../assets/tagData.json';

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
  width: '100%',
  height: '400px',
  overflowY: 'auto',
  overflowX: 'hidden',
};

const RegionTagModal = ({
  region_1,
  region_2,
  onClickReg2,
  visible,
  onClick,
  onCancel,
  onToggleReg,
  onReset,
}) => {
  const onClickRegion1 = ({ region_1 }) => {
    onClick({ region_1 });
  };

  const onClickRegion2 = (Reg_2) => {
    onClickReg2(Reg_2);
  };

  const onCancelModal = () => {
    onCancel();
    onToggleReg();
  };
  const onResetReg2 = () => {
    onReset();
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
          onClickReg1={onClickRegion1}
        />,
      );
    });
    return result;
  }
  //region2에 맞는 클릭 이벤트를 넣는다.
  function Region2Render() {
    const result = [];
    result.push(
      <RegionTagItem
        checked={region_2.length === 0}
        item={'전체'}
        key={'All'}
        onReset={onResetReg2}
      />,
    );
    tagData.region2[region_1].forEach((item, index) => {
      result.push(
        <RegionTagItem
          checked={region_2.includes(item)}
          item={item}
          key={'reg2_' + index}
          onClickReg2={onClickRegion2}
        />,
      );
    });
    return result;
  }
  if (!visible) return null;
  return (
    <Modal
      visible={visible}
      title="지역을 선택해주세요"
      centered
      bodyStyle={style}
      footer={[
        <Button key="submit" type="primary">
          확인
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
    </Modal>
  );
};

export default RegionTagModal;

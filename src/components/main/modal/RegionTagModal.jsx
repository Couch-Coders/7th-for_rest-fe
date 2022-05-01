import React, { useCallback, useMemo } from 'react';
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
  const onClickFirstRegion = useCallback(
    ({ region_1 }) => {
      onChangeSearchParam({ region_1 });
      onChangeSearchParam({ region_2: [] });
    },
    [onChangeSearchParam],
  );

  const onClickSecondRegion = useCallback(
    (region_2_item) => {
      let updateItem = [];
      if (region_2.includes(region_2_item)) {
        updateItem = region_2.filter((item) => item !== region_2_item);
      } else {
        updateItem = [...region_2, region_2_item];
      }
      onChangeSearchParam({ region_2: updateItem });
    },
    [onChangeSearchParam, region_2],
  );

  //전체버튼 클릭시 작동
  const onResetSecondRegion = useCallback(() => {
    onChangeSearchParam({ region_2: [] });
  }, [onChangeSearchParam]);

  const onCancelModal = useCallback(() => {
    onReset();
    onToggleReg();
  }, [onReset, onToggleReg]);

  const onConfirm = useCallback(() => {
    if (region_1 !== '') {
      onSearch();
      onToggleReg();
    }
  }, [onSearch, onToggleReg, region_1]);

  //region1에 맞는 클릭 이벤트를 넣는다.
  const Region1Render = useCallback(() => {
    const result = [];
    tagData.region1?.forEach((region, index) => {
      //tagData는 json파일에 있는 정보
      result.push(
        <RegionTagItem
          region={region}
          key={index}
          checked={region_1 === region}
          onClickFirstRegion={onClickFirstRegion}
        />,
      );
    });
    return result;
  }, [onClickFirstRegion, region_1]);

  const region1 = useMemo(() => Region1Render(), [Region1Render]);

  //region2에 맞는 클릭 이벤트를 넣는다.
  const Region2Render = useCallback(() => {
    const result = [];
    // 처음에 전체 태그를 하나 넣는다.
    result.push(
      <RegionTagItem
        checked={region_2.length === 0}
        region={'전체'}
        key={'All'}
        onResetSecondRegion={onResetSecondRegion}
      />,
    );
    tagData.region2[region_1]?.forEach((region, index) => {
      //tagData는 json파일에 있는 정보
      result.push(
        <RegionTagItem
          checked={region_2.includes(region)}
          region={region}
          key={'reg_2' + index}
          onClickSecondRegion={onClickSecondRegion}
        />,
      );
    });
    return result;
  }, [onClickSecondRegion, onResetSecondRegion, region_1, region_2]);

  const region2 = useMemo(() => Region2Render(), [Region2Render]);

  return (
    <CustomModal
      visible={visible}
      title="지역을 선택해주세요"
      centered
      bodyStyle={style}
      footer={[
        <Button key="submit" type="primary" onClick={onConfirm}>
          {category && region_1 ? (
            <Link to={`places/${category}/${region_1}/`}>확인</Link>
          ) : (
            <Link to={''}>확인</Link>
          )}
        </Button>,
        <Button key="back" onClick={onCancelModal}>
          취소
        </Button>,
      ]}
      onCancel={onCancelModal}
    >
      <TagBox>{region1}</TagBox>
      {region_1 !== '' ? (
        <>
          <TitleBox>
            <h3>상세지역을 선택해주세요.</h3>
          </TitleBox>
          <TagBox>{region2}</TagBox>
        </>
      ) : (
        ''
      )}
    </CustomModal>
  );
};

export default React.memo(RegionTagModal);

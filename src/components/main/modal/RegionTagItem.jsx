import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'antd';

const RegionTagItemBlock = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const CustomButton = styled(Button)`
  width: 76px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  :focus {
    color: rgba(0, 0, 0, 0.85);
    border-color: #d9d9d9;
  }
  ${(props) =>
    props.checked &&
    css`
      color: #40a9ff;
      border-color: #40a9ff;
      background: white;
      :focus {
        color: #40a9ff;
        border-color: #40a9ff;
      }
    `}
`;

const RegionTagItem = ({
  region,
  onClickFirstRegion,
  onClickSecondRegion,
  checked,
  onResetSecondRegion,
}) => {
  const onClickRegion1 = useCallback(() => {
    onClickFirstRegion({ region_1: region });
  }, [region, onClickFirstRegion]);

  const onClickRegion2 = useCallback(() => {
    onClickSecondRegion(region);
  }, [region, onClickSecondRegion]);

  const onReset = useCallback(() => {
    onResetSecondRegion();
  }, [onResetSecondRegion]);

  const onClick = () => {
    if (onClickFirstRegion) return onClickRegion1();
    else if (onClickSecondRegion) return onClickRegion2();
    else if (onResetSecondRegion) return onReset();
  };

  return (
    <RegionTagItemBlock>
      <CustomButton shape={'round'} onClick={onClick} checked={checked}>
        {region}
      </CustomButton>
    </RegionTagItemBlock>
  );
};

RegionTagItem.defaultProps = {
  item: '',
  onClickReg1: null,
  onClickReg2: null,
  checked: false,
  onReset: null,
};

export default React.memo(RegionTagItem);

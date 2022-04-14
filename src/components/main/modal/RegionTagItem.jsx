import React from 'react';
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
  item,
  onClickFirstRegion,
  onClickSecondRegion,
  checked,
  onResetSecondRegion,
}) => {
  const onClickRegion1 = () => {
    onClickFirstRegion({ region_1: item });
  };
  const onClickRegion2 = () => {
    onClickSecondRegion(item);
  };
  const onReset = () => {
    onResetSecondRegion();
  };

  const onClick = () => {
    if (onClickFirstRegion) return onClickRegion1();
    else if (onClickSecondRegion) return onClickRegion2();
    else if (onResetSecondRegion) return onReset();
  };

  return (
    <RegionTagItemBlock>
      <CustomButton shape={'round'} onClick={onClick} checked={checked}>
        {item}
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

export default RegionTagItem;

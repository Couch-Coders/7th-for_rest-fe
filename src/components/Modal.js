import React from "react";
import styled from "styled-components";
import tagData from "../assets/tagData.json";
import mainInfoData from "../assets/mainInfoData.json";

const ModalBlock = styled.div``;

const Modal = () => {
  tagData.category.map((item) => {
    console.log(item);
  });
  for (const key in mainInfoData.recommendInfo) {
    console.log(mainInfoData.recommendInfo[key].serachType);
  }

  return <ModalBlock>test</ModalBlock>;
};

export default Modal;

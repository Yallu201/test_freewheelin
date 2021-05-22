import React from "react";
import styled from "styled-components";

const SectionDividerStyled = styled.div`
  display: flex;
  flex-grow: 0;
  width: 8px;
  background: #f5f5f5;
`;
const SectionShadow = styled.div`
  flex-grow: 0;
  width: 2px;
  background: #e0e0e0;
`;

const SectionDivider = () => {
  return (
    <>
      <SectionDividerStyled>
        <SectionShadow />
      </SectionDividerStyled>
    </>
  );
};

export default SectionDivider;

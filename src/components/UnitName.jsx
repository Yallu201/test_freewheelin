import React from "react";
import styled from "styled-components";

const UnitNameStyled = styled.header`
	padding-left: 25px;
	padding-top: 8px;
	padding-bottom: 8px;

	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 20px;

	color: #4c4c4c;
	background: #fafafa;
`;
const UnitName = ({ children }) => {
	return <UnitNameStyled>{children}</UnitNameStyled>;
};

export default React.memo(UnitName);

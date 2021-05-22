import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
	text-align: ${({ isCenter }) => (isCenter ? "center" : "left")};
	padding: ${({ isCenter }) => (isCenter ? "14px 0" : "14px 25px")};

	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 20px;

	color: #4c4c4c;
	border-bottom: 3px solid #f5f5f5;
`;
const HeeaderBasic = ({ isCenter = false, children }) => {
	return <HeaderStyled isCenter={isCenter}>{children}</HeaderStyled>;
};

export default React.memo(HeeaderBasic);

import React from "react";
import styled from "styled-components";
const Wrap = styled.div`
	display: flex;
	justify-content: center;
`;
const Content = styled.div`
	width: 229px;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 28px;

	text-align: center;

	color: #9f9f9f;
`;
const ButtonImage = styled.button`
	color: #00abff;
	background: #ffffff;

	min-width: 70px;
	padding-top: 4px;
	padding-bottom: 4px;

	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 14px;

	border: 1px solid #e0e0e0;
	box-sizing: border-box;
	border-radius: 3px;
`;
const InfoMessage = () => {
	return (
		<Wrap>
			<Content>
				<ButtonImage>유사문항</ButtonImage> 버튼을 누르면
				<br /> 해당 문제의 유사 문항을 볼 수 있습니다.
			</Content>
		</Wrap>
	);
};

export default InfoMessage;

import React from "react";
import styled from "styled-components";
const [WHITE, SKYBLUE] = ["#ffffff", "#00abff"];
const ButtonStyled = styled.button`
	color: ${({ isActive }) => (isActive ? WHITE : SKYBLUE)};
	background: ${({ isActive }) => (isActive ? SKYBLUE : WHITE)};

	min-width: 80px;
	padding-top: 10px;
	padding-bottom: 10px;

	font-size: 14px;
	font-weight: 700;
	border: 1px solid #e0e0e0;
	box-sizing: border-box;
	border-radius: 3px;

	cursor: pointer;
`;

const Button = ({ isActive, children, onClick = () => {} }) => {
	return (
		<ButtonStyled isActive={isActive} onClick={onClick}>
			{children}
		</ButtonStyled>
	);
};
export default React.memo(Button);

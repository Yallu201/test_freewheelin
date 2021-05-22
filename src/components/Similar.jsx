import React from "react";
import styled from "styled-components";
import { Button } from "components";
const Warp = styled.article`
	border-bottom: 8px solid #f5f5f5;
`;
const Info = styled.header`
	display: flex;
	padding-top: 8px;
	padding-bottom: 8px;
	border-bottom: 1px solid #f5f5f5;
`;
const Type = styled.div`
	padding-left: 38px;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 40px;

	color: #9f9f9f;
`;
const Name = styled.div`
	flex: 1;
	flex-shrink: 0;
	padding-left: 18px;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 40px;

	color: #4c4c4c;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;
const ButtonGroup = styled.div`
	padding-right: 15px;
`;
const Content = styled.div`
	display: flex;
	padding-top: 18px;
	padding-bottom: 32px;
`;
const ProblemNumber = styled.div`
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 35px;

	padding-left: 47px;
	padding-right: 37px;
	color: #02c7f2;
`;

const Similar = props => {
	const { problemType, unitName, problemURL, seq } = props;
	const { onClickMove, onClickReplace } = props;
	return (
		<Warp>
			<Info>
				<Type>{problemType}</Type>
				<Name>{unitName}</Name>
				<ButtonGroup>
					<Button onClick={onClickMove}>추가</Button>
					<Button onClick={onClickReplace}>교체</Button>
				</ButtonGroup>
			</Info>
			<Content>
				<ProblemNumber>{seq}</ProblemNumber>
				<img src={problemURL} alt={`${unitName} 문제 이미지`} />
			</Content>
		</Warp>
	);
};

export default React.memo(Similar);

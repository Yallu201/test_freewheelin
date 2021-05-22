import React from "react";
import styled from "styled-components";
import { InfoMessage } from "components";
import { SimilarContainer } from "containers";

const Warp = styled.article`
	display: ${({ isEmpty }) => (isEmpty ? "flex" : "block")};
	flex-direction: column;
	justify-content: center;
	overflow: auto;
	height: 637px;
`;

const ProblemList = ({ list }) => {
	const isEmpty = !list.length;
	return (
		<Warp isEmpty={isEmpty}>
			{isEmpty && <InfoMessage />}
			{list.map((item, index) => (
				<SimilarContainer
					key={`problem_${item.id}`}
					seq={index + 1}
					{...item}
				/>
			))}
		</Warp>
	);
};

export default React.memo(ProblemList);

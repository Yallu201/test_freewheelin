import React from "react";
import styled from "styled-components";
import { ProblemContainer } from "containers";

const Warp = styled.article`
	overflow: auto;
	height: 673px;
`;

const ProblemList = ({ list }) => {
	return (
		<Warp>
			{list.map((item, index) => (
				<ProblemContainer
					key={`problem_${item.id}_${index}`}
					seq={index + 1}
					{...item}
				/>
			))}
		</Warp>
	);
};

export default ProblemList;

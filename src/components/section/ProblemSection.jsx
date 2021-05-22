import React from "react";
import { Section, Header } from "components";
import { ProblemContainer } from "containers";
const ProblemSection = ({ list }) => {
	return (
		<Section>
			<Header>학습지 상세 편집</Header>
			{list.map((item, index) => (
				<ProblemContainer
					key={`problem_${item.id}`}
					seq={index + 1}
					{...item}
				/>
			))}
		</Section>
	);
};

export default ProblemSection;

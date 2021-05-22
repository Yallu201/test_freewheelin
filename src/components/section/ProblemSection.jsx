import React from "react";
import { Section, Header, ProblemList } from "components";
const ProblemSection = ({ list }) => {
	return (
		<Section>
			<Header>학습지 상세 편집</Header>
			<ProblemList list={list} />
		</Section>
	);
};

export default ProblemSection;

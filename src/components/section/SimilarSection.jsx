import React from "react";
import { Section, Header, UnitName, SimilarList } from "components";
const SimilarSection = ({ list, selectedProblem }) => {
	return (
		<Section>
			<Header isCenter>문항 교체/추가</Header>
			{selectedProblem && <UnitName>{selectedProblem.unitName}</UnitName>}
			<SimilarList list={list} />
		</Section>
	);
};

export default SimilarSection;

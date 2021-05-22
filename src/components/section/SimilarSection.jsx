import React from "react";
import { Section, Header, UnitName } from "components";
import { SimilarContainer } from "containers";
const SimilarSection = ({ list, selectedProblem }) => {
	return (
		<Section>
			<Header isCenter>문항 교체/추가</Header>
			{selectedProblem && <UnitName>{selectedProblem.unitName}</UnitName>}
			{list.map((item, index) => (
				<SimilarContainer
					key={`problem_${item.id}`}
					seq={index + 1}
					{...item}
				/>
			))}
		</Section>
	);
};

export default SimilarSection;

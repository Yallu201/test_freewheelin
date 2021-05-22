import React from "react";
import { connect } from "react-redux";
import { SimilarSection } from "components";
const ProblemContainer = ({ list, selectedProblem }) => {
	return (
		<SimilarSection
			list={list}
			selectedProblem={selectedProblem}
		></SimilarSection>
	);
};
const mapStateToProps = ({ problem: { similars, selectedProblem } }) => ({
	list: similars,
	selectedProblem,
});
export default connect(mapStateToProps)(ProblemContainer);

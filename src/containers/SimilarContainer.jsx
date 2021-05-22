import React, { useCallback } from "react";
import { connect } from "react-redux";
import { Similar } from "components";
import { moveSimilarProblem, replaceSimilarWithProblem } from "modules/problem";
const SimilarContainer = ({
	moveSimilarProblem,
	replaceSimilarWithProblem,
	seq,
	...others
}) => {
	const onClickMove = useCallback(
		() => moveSimilarProblem(seq),
		[seq, moveSimilarProblem],
	);
	const onClickReplace = useCallback(
		() => replaceSimilarWithProblem(seq),
		[seq, replaceSimilarWithProblem],
	);
	return (
		<Similar
			{...others}
			seq={seq}
			onClickMove={onClickMove}
			onClickReplace={onClickReplace}
		/>
	);
};
const mapStateToProps = null;
const mapDispatchToProps = { moveSimilarProblem, replaceSimilarWithProblem };
export default connect(mapStateToProps, mapDispatchToProps)(SimilarContainer);

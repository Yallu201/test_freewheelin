import React, { useCallback } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Problem } from "components";
import { setsimilars, activeProblem, deleteProblem } from "modules/problem";
const ProblemContainer = ({
	setsimilars,
	activeProblem,
	deleteProblem,
	seq,
	...others
}) => {
	const onClickSimilar = useCallback(() => {
		axios
			.get("/data/fe-similars.json")
			.then(res => {
				setsimilars(res.data.data);
			})
			.catch(e => console.error(e))
			.finally(() => activeProblem(seq));
	}, [seq, setsimilars, activeProblem]);
	const onClickDelete = useCallback(
		() => deleteProblem(seq),
		[seq, deleteProblem],
	);
	return (
		<Problem
			{...others}
			seq={seq}
			onClickSimilar={onClickSimilar}
			onClickDelete={onClickDelete}
		/>
	);
};
const mapStateToProps = null;
const mapDispatchToProps = { setsimilars, activeProblem, deleteProblem };
export default connect(mapStateToProps, mapDispatchToProps)(ProblemContainer);

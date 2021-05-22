import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setProblems } from "modules/problem";
import { ProblemSection } from "components";
const ProblemContainer = ({ list, setProblems }) => {
	useEffect(() => {
		axios
			.get("/data/fe-problems.json")
			.then(res => {
				const { data } = res.data;
				const problems = data.map(item => ({
					...item,
					isActive: false,
				}));
				setProblems(problems);
			})
			.catch(e => console.error(e));
	}, [setProblems]);
	return <ProblemSection list={list}></ProblemSection>;
};
const mapStateToProps = ({ problem: { problems } }) => ({ list: problems });
const mapDispatchToProps = { setProblems };
export default connect(mapStateToProps, mapDispatchToProps)(ProblemContainer);

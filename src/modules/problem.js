import { createAction, handleActions } from "redux-actions";

const SET_PROBLEMS = "problem/SET_PROBLEMS";
const SET_SIMILAR_PROBLEMS = "problem/SET_SIMILAR_PROBLEMS";
const ACTIVE_PROBLEM = "problem/ACTIVE_PROBLEM";
const DELETE_PROBLEM = "problem/DELETE_PROBLEM";
const MOVE_SIMILAR_PROBLEM = "problem/MOVE_SIMILAR_PROBLEM";
const REPLACE_SIMILAR_WITH_PROBLEM = "problem/REPLACE_SIMILAR_WITH_PROBLEM";

export const setProblems = createAction(SET_PROBLEMS, list => list);
export const activeProblem = createAction(ACTIVE_PROBLEM, seq => seq);
export const deleteProblem = createAction(DELETE_PROBLEM, seq => seq);
export const setsimilars = createAction(SET_SIMILAR_PROBLEMS, list => list);
export const moveSimilarProblem = createAction(
	MOVE_SIMILAR_PROBLEM,
	seq => seq,
);
export const replaceSimilarWithProblem = createAction(
	REPLACE_SIMILAR_WITH_PROBLEM,
	seq => seq,
);

const initialState = {
	selectedProblem: null,
	problems: [],
	similars: [],
};

const reducer = handleActions(
	{
		[SET_PROBLEMS]: (state, { payload: list }) => ({
			...state,
			problems: list,
		}),
		[SET_SIMILAR_PROBLEMS]: (state, { payload: list }) => {
			return { ...state, similars: list };
		},
		[ACTIVE_PROBLEM]: (state, { payload: seq }) => {
			// seq 와 일치하는 문제만 활성화
			let callback = (item, index) => ({
				...item,
				isActive: seq === index + 1,
			});
			// seq 가 없다면 모든 문제 비활성화
			if (!seq) callback = item => ({ ...item, isActive: false });
			const problems = state.problems.map(callback);
			const selectedProblem = problems.find(item => item.isActive);
			return { ...state, problems, selectedProblem };
		},
		[DELETE_PROBLEM]: (state, { payload: seq }) => {
			const isActivedProblem = state.problems[seq - 1].isActive;
			const callback = (_, index) => seq !== index + 1;
			const problems = state.problems.filter(callback);
			const similars = isActivedProblem ? [] : state.similars;
			const selectedProblem = isActivedProblem
				? null
				: state.selectedProblem;
			return { problems, similars, selectedProblem };
		},
		[MOVE_SIMILAR_PROBLEM]: (state, { payload: seq }) => {
			// 문제 배열 deep copy ... [1]
			const problems = state.problems.map(p => p);
			// 활성화된 문제 위치 확인 ... [2]
			const indexActive = problems.findIndex(item => item.isActive);
			// 선택한 유사 문제 추출 ... [3]
			const similar_ = state.similars.find(
				(_, index) => index + 1 === seq,
			);
			// [1] 에서 [2] 위치 뒤에 [3] 삽입
			const nextIndex = indexActive + 1;
			problems.splice(nextIndex, 0, similar_);
			// 유사문제 배열에서 [3] 삭제하여 새로 할당
			const similars = state.similars.filter(
				(_, index) => index + 1 !== seq,
			);
			return { ...state, problems, similars };
		},
		[REPLACE_SIMILAR_WITH_PROBLEM]: (state, { payload: seq }) => {
			// 문제 배열 deep copy ... [1]
			const problems = state.problems.map(p => p);
			// 문제유사 배열 deep copy ... [2]
			const similars = state.similars.map(p => p);

			// 활성화된 문제 위치 확인 ... [3]
			const indexActive = problems.findIndex(item => item.isActive);
			// 활성화된 문제 추출 ... [4]
			const problem_ = problems[indexActive];
			// 선택한 유사 문제 추출 ... [5]
			const similar_ = similars.find((_, index) => index + 1 === seq);

			// [1] 에서 [3] 위치에 [5] 삽입
			problems.splice(indexActive, 1, { ...similar_, isActive: true });
			// [2] 에서 seq - 1 위치에 [4] 삽입
			similars.splice(seq - 1, 1, { ...problem_, isActive: false });
			return { problems, similars, selectedProblem: similar_ };
		},
	},
	initialState,
);

export default reducer;

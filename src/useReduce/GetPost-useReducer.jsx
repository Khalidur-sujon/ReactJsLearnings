import { useReducer, useEffect } from "react";

const initialState = {
	loading: true,
	post: {},
	error: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "Success":
			return {
				loading: false,
				error: "",
				post: action.result,
			};
		case "Failed":
			return {
				loading: false,
				error: "so0o0o0ry... problem in your request",
				post: {},
			};

		default:
			return state;
	}
};

function GetPost() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => response.json())
			.then((data) => {
				dispatch({ type: "Success", result: data });
			})
			.catch(() => {
				dispatch({ type: "Failed" });
			});
	}, []);

	return (
		<div>
			{state.loading ? "Loading..." : state.post.title}
			{state.error || null}
		</div>
	);
}

export default GetPost;

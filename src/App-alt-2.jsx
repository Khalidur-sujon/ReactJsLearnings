// import Counter1 from "./useReduce/Counter1";
import { useReducer } from "react";

const initialState = {
	counter: 0,
	counter2: 0,
};
const reducer = (state, action) => {
	switch (action.type) {
		case "increament":
			return { ...state, counter: state.counter + action.value };
		case "decreament":
			return { ...state, counter: state.counter - action.value };
		case "increament2":
			return { ...state, counter2: state.counter2 + action.value };
		case "decreament2":
			return { ...state, counter2: state.counter2 - action.value };
		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<div>
				<h1>Count:{count.counter}</h1>
				<button
					type="button"
					onClick={() => dispatch({ type: "increament", value: 10 })}
				>
					Increament by 10
				</button>
				<button
					type="button"
					onClick={() => dispatch({ type: "decreament", value: 3 })}
				>
					Decreament by 3
				</button>
			</div>
			<div>
				<h1>Count2:{count.counter2}</h1>
				<button
					type="button"
					onClick={() => dispatch({ type: "increament2", value: 20 })}
				>
					Increament by 20
				</button>
				<button
					type="button"
					onClick={() => dispatch({ type: "decreament2", value: 30 })}
				>
					Decreament by 30
				</button>
			</div>
		</div>
	);
}

// export
export default App;

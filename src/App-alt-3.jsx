import ComponentB from "./useReduce/ComponentB";
import { useReducer } from "react";
import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case "increament":
			return state + 1;
		case "decreament":
			return state - 1;

		default:
			return state;
	}
};

function App() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>Count:{count} </h1>
			<counterContext.Provider value={{ dispatcher: dispatch }}>
				<ComponentB />
			</counterContext.Provider>
		</div>
	);
}

export default App;

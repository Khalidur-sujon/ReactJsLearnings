// import Counter from "./components/render_props/Counter";
// import ClickCounter from "./components/render_props/ClickCounter";
// import themeContext from "./context_api/themeContext";
// import Section from "./context_api/Section";
// import React from "react";
// import Todo from "./components/hooks/Todo";
// import MyComponent from "./components/hooks/MyComponent";
// import { useState } from "react";

// class App extends React.Component {
// 	state = {
// 		theme: "light",
// 		changeTheme: () => {
// 			this.setState((theme) => {
// 				if (theme === "dark") {
// 					return { theme: "light" };
// 				}
// 				return {
// 					theme: "dark",
// 				};
// 			});
// 		},
// 	};

// 	render() {
// 		return (
// 			<div className="App">
// 				<Counter>
// 					{(counter, increamentCounter) => (
// 						<ClickCounter
// 							count={counter}
// 							increamentCounter={increamentCounter}
// 						/>
// 					)}
// 				</Counter>

// 				<br></br>
// 				<br></br>

// 				<themeContext.Provider value={this.state}>
// 					<Section />
// 				</themeContext.Provider>
// 			</div>
// 		);
// 	}
// }

// export default App;

// function App() {
// 	const [show, setshow] = useState(true);

// 	return (
// 		<div className="app">
// 			<div>{show && <MyComponent />}</div>
// 			<p>
// 				<button
// 					type="button"
// 					onClick={() => setshow((prevShow) => !prevShow)}
// 				>
// 					{" "}
// 					{show ? "Hide post" : "Show post"}
// 				</button>
// 			</p>
// 		</div>
// 	);
// }

import Clock from "./components/useRef/Clock";

function App() {
	return (
		<div className="app">
			<Clock />
		</div>
	);
}

export default App;

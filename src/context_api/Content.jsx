import Counter from "../components/render_props/Counter";
import HoverCounter from "../components/render_props/HoverCounter";
import themeContext from "./themeContext";
import { useContext } from "react";

function Content() {
	const context = useContext(themeContext);
	const { theme, changeTheme } = context;
	return (
		<div>
			<h1>This is a content</h1>
			<Counter>
				{(count, incrementCounter) => (
					<HoverCounter
						count={count}
						incrementCounter={incrementCounter}
						theme={theme}
						changeTheme={changeTheme}
					/>
				)}
			</Counter>
		</div>
	);
}

export default Content;

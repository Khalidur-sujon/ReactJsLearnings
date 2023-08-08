function HoverCounter({ count, incrementCounter, theme, changeTheme }) {
	const style =
		theme === "dark"
			? { backgroundColor: "#000000", color: "#ffffff" }
			: null;
	return (
		<div>
			<h1 onMouseOver={incrementCounter} style={style}>
				Hoverd {count} times
			</h1>
			<button type="button" onClick={changeTheme}>
				Click here to change the theme
			</button>
		</div>
	);
}

export default HoverCounter;

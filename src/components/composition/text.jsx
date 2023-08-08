function Text({ addEmoji, addBracket }) {
	let text = "I am js language";
	if (addEmoji) {
		text = addEmoji(text, "......");
	}
	if (addBracket) {
		text = addBracket(text);
	}
	return <div>{text}</div>;
}

export default Text;

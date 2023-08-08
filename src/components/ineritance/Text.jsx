import Emoji from "./Emoji.jsx";

class Text extends Emoji {
	constructor(props) {
		super(props);
	}

	render() {
		let decoratedText = this.addEmoji("I am javascript", "---");
		return super.render(decoratedText);
	}
}
export default Text;

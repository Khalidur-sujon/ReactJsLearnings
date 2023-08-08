class Context {
	constructor(value) {
		this.value = value;
	}

	// provider
	provider = ({ children, value }) => {
		this.value = value;
		return children;
	};

	// consumer
	consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
	const context = new Context(value);
	return {
		Provider: context.provider,
		Consumer: context.consumer,
	};
}

export default createContext;

export default function BoilingVerdict({ celcius = 0 }) {
	if (celcius >= 100) {
		return <p>Water will boil.</p>;
	}
	return <p>Water will not boil.</p>;
}

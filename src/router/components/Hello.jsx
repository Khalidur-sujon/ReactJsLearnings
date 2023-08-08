import { Outlet } from "react-router-dom";

export default function Hello() {
	return (
		<div>
			<h1>Hello</h1>
			<Outlet />
			<p>paragraph of Hello</p>
		</div>
	);
}

import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<ul>
				<li>
					<Link to="/hello">Home</Link>
				</li>
				<li>
					<Link to="/posts">Posts</Link>
				</li>
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
			</ul>
		</div>
	);
}

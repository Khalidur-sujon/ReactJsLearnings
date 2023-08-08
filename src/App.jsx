// external imports
import { Routes, Route, Navigate } from "react-router-dom";

//internal imports
import Header from "./router/components/Header";
import Hello from "./router/components/Hello";
import Posts from "./router/components/Posts";
import Post from "./router/components/Post";
import Login from "./router/components/Login";
import PrivateOutlate from "./router/components/PrivateOutlate";
import Dashboard from "./router/components/Dashboard";
import Payment from "./router/components/Payment";

export default function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="/hello" />} />
				<Route path="/hello/*" element={<Hello />}>
					<Route path="world" element={<p>A new world</p>} />
				</Route>
				<Route path="/posts/" element={<Posts />} />
				<Route path="/posts/:postId" element={<Post />} />
				<Route path="/login/" element={<Login />} />
				<Route path="/*" element={<PrivateOutlate />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="Payment" element={<Payment />} />
				</Route>
			</Routes>
		</div>
	);
}

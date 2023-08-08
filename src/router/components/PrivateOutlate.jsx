import { Outlet, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export default function PrivateOutlate() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const auth = useAuth();
	return auth ? <Outlet /> : <Navigate to="/login" />;
}

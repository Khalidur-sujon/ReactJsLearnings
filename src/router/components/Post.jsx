import { useParams, useNavigate } from "react-router-dom";

export default function Post() {
	const params = useParams();
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div>
			<h1>Post</h1>
			<p>Post id - {params.postId}</p>
			<button type="button" onClick={goBack}>
				Go back
			</button>
		</div>
	);
}

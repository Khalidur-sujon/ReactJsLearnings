import { useEffect, useState } from "react";

function GetPost() {
	const [loading, setloading] = useState(true);
	const [post, setpost] = useState({});
	const [error, seterror] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => response.json())
			.then((data) => {
				setloading(false);
				setpost(data);
				seterror("");
			})
			.catch(() => {
				setloading(false);
				setpost({});
				seterror("There was a problem.");
			});
	}, []);

	return (
		<div>
			{loading ? "Loading..." : post.title}
			{error || null}
		</div>
	);
}

export default GetPost;
